use std::any::Any;

use polars_core::datatypes::DataType;
use polars_core::prelude::{AnyValue, Series};

use crate::executors::sinks::group_by::aggregates::AggregateFn;
use crate::operators::IdxSize;

pub(crate) struct LastAgg {
    chunk_idx: IdxSize,
    last: Option<AnyValue<'static>>,
    pub(crate) dtype: DataType,
}

impl LastAgg {
    pub(crate) fn new(dtype: DataType) -> Self {
        Self {
            chunk_idx: 0,
            last: None,
            dtype,
        }
    }
}

impl AggregateFn for LastAgg {
    fn pre_agg(&mut self, chunk_idx: IdxSize, item: &mut dyn ExactSizeIterator<Item = AnyValue>) {
        let item = unsafe { item.next().unwrap_unchecked() };
        self.chunk_idx = chunk_idx;
        self.last = Some(item.into_static());
    }
    fn pre_agg_ordered(
        &mut self,
        chunk_idx: IdxSize,
        offset: IdxSize,
        length: IdxSize,
        values: &Series,
    ) {
        self.chunk_idx = chunk_idx;
        self.last =
            Some(unsafe { values.get_unchecked((offset + length - 1) as usize) }.into_static())
    }

    fn dtype(&self) -> DataType {
        self.dtype.clone()
    }

    fn combine(&mut self, other: &dyn Any) {
        let other = unsafe { other.downcast_ref::<Self>().unwrap_unchecked() };
        if other.last.is_some() && other.chunk_idx >= self.chunk_idx {
            self.last.clone_from(&other.last);
            self.chunk_idx = other.chunk_idx;
        };
    }

    fn finalize(&mut self) -> AnyValue<'static> {
        std::mem::take(&mut self.last).unwrap_or(AnyValue::Null)
    }
    fn as_any(&self) -> &dyn Any {
        self
    }
}
