import React, { Component } from "react";
export default class Home extends Component {
    handleChange = (e) => {
        const selectValue = e.target.value;
        this.props.select(selectValue);
    }
    render() {
        const category = this.props.category;
        const optionItems = category.map((category) =>
            <option value={category.id}>{category.name}</option>
        );
        return (
            <div>
                <div class="container">
                    <div class="navbar navbar-inverse">
                        <div class="container">
                            <div class="navbar-header">
                                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                </button>
                            </div>
                            <div class="collapse navbar-collapse">
                                <ul class="nav navbar-nav">
                                    <li class="active"><a href="">Home</a></li>
                                    <li><a href="">View Cart</a></li>
                                    <li><a href="">Checkout</a></li>
                                </ul>
                                <div class="pull-right basic-search">
                                    <form>
                                        <input type="text" name="search" placeholder="Search.." />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="text-left">
                        <h1>Home</h1>
                        <p class="lead">To search for products you can either select a product group or enter the product name.</p>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <select class="form-control" id="productSelect" onChange={this.handleChange}>
                                <option>Please Select a Product Group</option>
                                {optionItems}
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

