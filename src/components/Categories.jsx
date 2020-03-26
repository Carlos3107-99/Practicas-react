import React from 'react';
import '../assets/styles/Categories.scss';
const Categories =({children}) => (
    <div className="categories">
<h3 class="categories_title">Mi lista</h3>

{children}

</div>

);

export default Categories;