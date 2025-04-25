function ProductCategoryRow({ category }) {
    return (
        <tr className="table-secondary">
            <th colSpan="2" className="text-center">
                {category}
            </th>
        </tr>
    );
}

export default ProductCategoryRow;