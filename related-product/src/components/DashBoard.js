import React from "react";

export default function DashBoard() {
    return (
        <div>
            <div class="container">
                <div class="row">
                    <div class="col-md-6 col-sm-7 col-xs-10">
                        <h1>Dashboard</h1>
                    </div>
                    <div id="cartStatus" class="col-md-1 col-md-push-5 col-sm-2 col-sm-push-3 col-xs-2">
                        <span id="cartCount">0</span>
                        <i class="glyphicon glyphicon-shopping-cart"></i>
                        </div>
                </div>
            </div>
        </div>
    );
}


