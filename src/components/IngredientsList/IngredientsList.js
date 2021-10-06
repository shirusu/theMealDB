import React from 'react';
import {Link} from "react-router-dom";

const IngredientsList = ({ingredients}) => {
    return (
                ingredients.map((item, idx) =>
                    <div key={idx} className="col-md-4 col-sm-6 mb-3">
                        <Link to={`/ingredients/${item}`}>
                            <img src={`https://www.themealdb.com/images/ingredients/${item}.png`} alt=""/>
                            <div className="ing-title">{item}</div>
                        </Link>

                    </div>
                )
    );
};

export default IngredientsList;