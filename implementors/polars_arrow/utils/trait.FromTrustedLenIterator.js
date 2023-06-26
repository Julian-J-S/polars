(function() {var implementors = {
"polars_arrow":[],
"polars_core":[["impl&lt;T: <a class=\"trait\" href=\"polars_core/chunked_array/object/trait.PolarsObject.html\" title=\"trait polars_core::chunked_array::object::PolarsObject\">PolarsObject</a>&gt; <a class=\"trait\" href=\"polars_core/utils/trait.FromTrustedLenIterator.html\" title=\"trait polars_core::utils::FromTrustedLenIterator\">FromTrustedLenIterator</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;T&gt;&gt; for <a class=\"type\" href=\"polars_core/datatypes/type.ObjectChunked.html\" title=\"type polars_core::datatypes::ObjectChunked\">ObjectChunked</a>&lt;T&gt;"],["impl <a class=\"trait\" href=\"polars_core/utils/trait.FromTrustedLenIterator.html\" title=\"trait polars_core::utils::FromTrustedLenIterator\">FromTrustedLenIterator</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a>&gt;&gt; for <a class=\"struct\" href=\"polars_core/chunked_array/struct.ChunkedArray.html\" title=\"struct polars_core::chunked_array::ChunkedArray\">ChunkedArray</a>&lt;<a class=\"struct\" href=\"polars_core/datatypes/struct.BooleanType.html\" title=\"struct polars_core::datatypes::BooleanType\">BooleanType</a>&gt;"],["impl&lt;Ptr&gt; <a class=\"trait\" href=\"polars_core/utils/trait.FromTrustedLenIterator.html\" title=\"trait polars_core::utils::FromTrustedLenIterator\">FromTrustedLenIterator</a>&lt;Ptr&gt; for <a class=\"type\" href=\"polars_core/datatypes/type.BinaryChunked.html\" title=\"type polars_core::datatypes::BinaryChunked\">BinaryChunked</a><span class=\"where fmt-newline\">where\n    Ptr: <a class=\"trait\" href=\"polars_core/chunked_array/upstream_traits/trait.PolarsAsRef.html\" title=\"trait polars_core::chunked_array::upstream_traits::PolarsAsRef\">PolarsAsRef</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>]&gt;,</span>"],["impl&lt;T&gt; <a class=\"trait\" href=\"polars_core/utils/trait.FromTrustedLenIterator.html\" title=\"trait polars_core::utils::FromTrustedLenIterator\">FromTrustedLenIterator</a>&lt;&lt;T as <a class=\"trait\" href=\"polars_core/datatypes/trait.PolarsNumericType.html\" title=\"trait polars_core::datatypes::PolarsNumericType\">PolarsNumericType</a>&gt;::<a class=\"associatedtype\" href=\"polars_core/datatypes/trait.PolarsNumericType.html#associatedtype.Native\" title=\"type polars_core::datatypes::PolarsNumericType::Native\">Native</a>&gt; for <a class=\"struct\" href=\"polars_core/utils/struct.NoNull.html\" title=\"struct polars_core::utils::NoNull\">NoNull</a>&lt;<a class=\"struct\" href=\"polars_core/chunked_array/struct.ChunkedArray.html\" title=\"struct polars_core::chunked_array::ChunkedArray\">ChunkedArray</a>&lt;T&gt;&gt;<span class=\"where fmt-newline\">where\n    T: <a class=\"trait\" href=\"polars_core/datatypes/trait.PolarsNumericType.html\" title=\"trait polars_core::datatypes::PolarsNumericType\">PolarsNumericType</a>,</span>"],["impl&lt;Ptr&gt; <a class=\"trait\" href=\"polars_core/utils/trait.FromTrustedLenIterator.html\" title=\"trait polars_core::utils::FromTrustedLenIterator\">FromTrustedLenIterator</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;Ptr&gt;&gt; for <a class=\"type\" href=\"polars_core/datatypes/type.BinaryChunked.html\" title=\"type polars_core::datatypes::BinaryChunked\">BinaryChunked</a><span class=\"where fmt-newline\">where\n    Ptr: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>]&gt;,</span>"],["impl&lt;Ptr&gt; <a class=\"trait\" href=\"polars_core/utils/trait.FromTrustedLenIterator.html\" title=\"trait polars_core::utils::FromTrustedLenIterator\">FromTrustedLenIterator</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;Ptr&gt;&gt; for <a class=\"type\" href=\"polars_core/datatypes/type.Utf8Chunked.html\" title=\"type polars_core::datatypes::Utf8Chunked\">Utf8Chunked</a><span class=\"where fmt-newline\">where\n    Ptr: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt;,</span>"],["impl <a class=\"trait\" href=\"polars_core/utils/trait.FromTrustedLenIterator.html\" title=\"trait polars_core::utils::FromTrustedLenIterator\">FromTrustedLenIterator</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a>&gt; for <a class=\"struct\" href=\"polars_core/utils/struct.NoNull.html\" title=\"struct polars_core::utils::NoNull\">NoNull</a>&lt;<a class=\"type\" href=\"polars_core/datatypes/type.BooleanChunked.html\" title=\"type polars_core::datatypes::BooleanChunked\">BooleanChunked</a>&gt;"],["impl&lt;Ptr&gt; <a class=\"trait\" href=\"polars_core/utils/trait.FromTrustedLenIterator.html\" title=\"trait polars_core::utils::FromTrustedLenIterator\">FromTrustedLenIterator</a>&lt;Ptr&gt; for <a class=\"type\" href=\"polars_core/datatypes/type.Utf8Chunked.html\" title=\"type polars_core::datatypes::Utf8Chunked\">Utf8Chunked</a><span class=\"where fmt-newline\">where\n    Ptr: <a class=\"trait\" href=\"polars_core/chunked_array/upstream_traits/trait.PolarsAsRef.html\" title=\"trait polars_core::chunked_array::upstream_traits::PolarsAsRef\">PolarsAsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt;,</span>"],["impl <a class=\"trait\" href=\"polars_core/utils/trait.FromTrustedLenIterator.html\" title=\"trait polars_core::utils::FromTrustedLenIterator\">FromTrustedLenIterator</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"polars_core/series/struct.Series.html\" title=\"struct polars_core::series::Series\">Series</a>&gt;&gt; for <a class=\"type\" href=\"polars_core/datatypes/type.ListChunked.html\" title=\"type polars_core::datatypes::ListChunked\">ListChunked</a>"],["impl&lt;Ptr&gt; <a class=\"trait\" href=\"polars_core/utils/trait.FromTrustedLenIterator.html\" title=\"trait polars_core::utils::FromTrustedLenIterator\">FromTrustedLenIterator</a>&lt;Ptr&gt; for <a class=\"type\" href=\"polars_core/datatypes/type.ListChunked.html\" title=\"type polars_core::datatypes::ListChunked\">ListChunked</a><span class=\"where fmt-newline\">where\n    Ptr: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"struct\" href=\"polars_core/series/struct.Series.html\" title=\"struct polars_core::series::Series\">Series</a>&gt;,</span>"],["impl&lt;T&gt; <a class=\"trait\" href=\"polars_core/utils/trait.FromTrustedLenIterator.html\" title=\"trait polars_core::utils::FromTrustedLenIterator\">FromTrustedLenIterator</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&lt;T as <a class=\"trait\" href=\"polars_core/datatypes/trait.PolarsNumericType.html\" title=\"trait polars_core::datatypes::PolarsNumericType\">PolarsNumericType</a>&gt;::<a class=\"associatedtype\" href=\"polars_core/datatypes/trait.PolarsNumericType.html#associatedtype.Native\" title=\"type polars_core::datatypes::PolarsNumericType::Native\">Native</a>&gt;&gt; for <a class=\"struct\" href=\"polars_core/chunked_array/struct.ChunkedArray.html\" title=\"struct polars_core::chunked_array::ChunkedArray\">ChunkedArray</a>&lt;T&gt;<span class=\"where fmt-newline\">where\n    T: <a class=\"trait\" href=\"polars_core/datatypes/trait.PolarsNumericType.html\" title=\"trait polars_core::datatypes::PolarsNumericType\">PolarsNumericType</a>,</span>"],["impl <a class=\"trait\" href=\"polars_core/utils/trait.FromTrustedLenIterator.html\" title=\"trait polars_core::utils::FromTrustedLenIterator\">FromTrustedLenIterator</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a>&gt; for <a class=\"type\" href=\"polars_core/datatypes/type.BooleanChunked.html\" title=\"type polars_core::datatypes::BooleanChunked\">BooleanChunked</a>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()