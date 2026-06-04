import React from "react";

function Sidebar(){
    return(
        <>
             <aside id="sidebar" class="sidebar">

        <ul class="sidebar-nav" id="sidebar-nav">

            <li class="nav-item">
                <a class="nav-link " href="/dashboard">
                    <i class="bi bi-grid"></i>
                    <span>Dashboard</span>
                </a>
            </li>

            <li class="nav-item">
                <a class="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="#">
                    <i class="bi bi-menu-button-wide"></i><span>Products</span><i
                        class="bi bi-chevron-down ms-auto"></i>
                </a>
                <ul id="components-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
                    <li>
                        <a href="/add-new-pro">
                            <i class="bi bi-circle"></i><span>Add New Products</span>
                        </a>
                    </li>
                    <li>
                        <a href="/view-pro">
                            <i class="bi bi-circle"></i><span>View Products</span>
                        </a>
                    </li>
                </ul>
            </li>

            <li class="nav-item">
                <a class="nav-link collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse" href="#">
                    <i class="bi bi-journal-text"></i><span>Category</span><i class="bi bi-chevron-down ms-auto"></i>
                </a>
                <ul id="forms-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
                    <li>
                        <a href="/add-new-category">
                            <i class="bi bi-circle"></i><span>Add New Category</span>
                        </a>
                    </li>
                    <li>
                        <a href="/view-category">
                            <i class="bi bi-circle"></i><span>View Category</span>
                        </a>
                    </li>
                </ul>
            </li>

            <li class="nav-item">
                <a class="nav-link collapsed" data-bs-target="#tables-nav" data-bs-toggle="collapse" href="#">
                    <i class="bi bi-layout-text-window-reverse"></i><span>Order</span><i
                        class="bi bi-chevron-down ms-auto"></i>
                </a>
                <ul id="tables-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
                    <li>
                        <a href="/add-order">
                            <i class="bi bi-circle"></i><span>Add Order</span>
                        </a>
                    </li>
                    <li>
                        <a href="view-order">
                            <i class="bi bi-circle"></i><span>View Order</span>
                        </a>
                    </li>
                </ul>
            </li>

            <li class="nav-item">
                <a class="nav-link collapsed" data-bs-target="#charts-nav" data-bs-toggle="collapse" href="#">
                    <i class="bi bi-people"></i><span>User</span><i class="bi bi-chevron-down ms-auto"></i>
                </a>
                <ul id="charts-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
                    <li>
                        <a href="/add-new-user">
                            <i class="bi bi-circle"></i><span>Add New User</span>
                        </a>
                    </li>
                    <li>
                        <a href="view-user">
                            <i class="bi bi-circle"></i><span>View user</span>
                        </a>
                    </li>
                </ul>
            </li>

            <li class="nav-item">
                <a class="nav-link collapsed" data-bs-target="#country-nav" data-bs-toggle="collapse" href="#">
                    <i class="bi bi-house-door-fill"></i><span>Country</span><i class="bi bi-chevron-down ms-auto"></i>
                </a>

                <ul id="country-nav" class="nav-content collapse" data-bs-parent="#sidebar-nav">
                    <li>
                        <a href="/add-new-country">
                            <i class="bi bi-circle"></i><span>Add Country</span>
                        </a>
                    </li>
                    <li>
                        <a href="view-country">
                            <i class="bi bi-circle"></i><span>View Country</span>
                        </a>
                    </li>
                </ul>
            </li>

            <li class="nav-item">
                <a class="nav-link collapsed" data-bs-target="#state-nav" data-bs-toggle="collapse" href="#">
                    <i class="bi bi-gem"></i><span>State</span><i class="bi bi-chevron-down ms-auto"></i>
                </a>

                <ul id="state-nav" class="nav-content collapse" data-bs-parent="#sidebar-nav">
                    <li>
                        <a href="add-new-state">
                            <i class="bi bi-gem"></i><span>Add State</span>
                        </a>
                    </li>
                    <li>
                        <a href="view-state">
                            <i class="bi bi-circle"></i><span>View State</span>
                        </a>
                    </li>
                </ul>
            </li>

            <li class="nav-item">
                <a class="nav-link collapsed" data-bs-target="#city-nav" data-bs-toggle="collapse" href="#">
                    <i class="bi bi-arrows-angle-expand"></i><span>City</span><i class="bi bi-chevron-down ms-auto"></i>
                </a>

                <ul id="city-nav" class="nav-content collapse" data-bs-parent="#sidebar-nav">
                    <li>
                        <a href="add-new-city">
                            <i class="bi bi-circle"></i><span>Add City</span>
                        </a>
                    </li>
                    <li>
                        <a href="view-city">
                            <i class="bi bi-circle"></i><span>View City</span>
                        </a>
                    </li>
                </ul>
            </li>

            <li class="nav-item">
                <a class="nav-link collapsed" data-bs-target="#area-nav" data-bs-toggle="collapse" href="#">
                    <i class="bi bi-gem"></i><span>Area</span><i class="bi bi-chevron-down ms-auto"></i>
                </a>

                <ul id="area-nav" class="nav-content collapse" data-bs-parent="#sidebar-nav">
                    <li>
                        <a href="add-new-area">
                            <i class="bi bi-circle"></i><span>Add Area</span>
                        </a>
                    </li>
                    <li>
                        <a href="view-area">
                            <i class="bi bi-circle"></i><span>View Area</span>
                        </a>
                    </li>
                </ul>
            </li>

        </ul>

    </aside>
        </>
    )
}
export default Sidebar;