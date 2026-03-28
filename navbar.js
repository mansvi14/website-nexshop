document.addEventListener("DOMContentLoaded", () => {
    const navbarHTML = `
    <nav class="navbar">
        <div class="nav-container">
            <a href="index.html" class="logo">Nex<span>Shop</span></a>

            <div class="search-container">
                <input type="text" placeholder="Search for products, brands and more...">
                <i class='bx bx-search'></i>
            </div>

            <ul class="nav-links">
                <li><a href="index.html">Home</a></li>
                
                <li class="mega-dropdown">
                    <a href="men.html">Men</a>
                    <div class="mega-menu">
                        <div class="mega-column">
                            <h4>Topwear</h4>
                            <ul>
                                <li><a href="#">T-Shirts</a></li>
                                <li><a href="#">Casual Shirts</a></li>
                                <li><a href="#">Formal Shirts</a></li>
                                <li><a href="#">Sweatshirts</a></li>
                                <li><a href="#">Jackets</a></li>
                            </ul>
                        </div>
                        <div class="mega-column">
                            <h4>Bottomwear</h4>
                            <ul>
                                <li><a href="#">Jeans</a></li>
                                <li><a href="#">Casual Trousers</a></li>
                                <li><a href="#">Formal Trousers</a></li>
                                <li><a href="#">Shorts</a></li>
                            </ul>
                        </div>
                        <div class="mega-column">
                            <h4>Footwear</h4>
                            <ul>
                                <li><a href="#">Sneakers</a></li>
                                <li><a href="#">Formal Shoes</a></li>
                                <li><a href="#">Sports Shoes</a></li>
                            </ul>
                        </div>
                    </div>
                </li>

                <li class="mega-dropdown">
                    <a href="women.html">Women</a>
                    <div class="mega-menu" style="border-top-color: #ec4899;">
                        <div class="mega-column">
                            <h4 style="color: #db2777;">Indian & Fusion Wear</h4>
                            <ul>
                                <li><a href="#">Kurtas & Suits</a></li>
                                <li><a href="#">Sarees</a></li>
                                <li><a href="#">Ethnic Wear</a></li>
                                <li><a href="#">Lehengas</a></li>
                            </ul>
                        </div>
                        <div class="mega-column">
                            <h4 style="color: #db2777;">Western Wear</h4>
                            <ul>
                                <li><a href="#">Dresses</a></li>
                                <li><a href="#">Tops</a></li>
                                <li><a href="#">T-Shirts</a></li>
                                <li><a href="#">Jeans</a></li>
                            </ul>
                        </div>
                        <div class="mega-column">
                            <h4 style="color: #db2777;">Footwear</h4>
                            <ul>
                                <li><a href="#">Flats</a></li>
                                <li><a href="#">Heels</a></li>
                                <li><a href="#">Casual Shoes</a></li>
                            </ul>
                        </div>
                    </div>
                </li>

                <li class="mega-dropdown">
                    <a href="kids.html">Kids</a>
                    <div class="mega-menu" style="border-top-color: #f59e0b;">
                        <div class="mega-column">
                            <h4 style="color: #d97706;">Boys Clothing</h4>
                            <ul>
                                <li><a href="#">T-Shirts</a></li>
                                <li><a href="#">Shirts</a></li>
                                <li><a href="#">Jeans</a></li>
                            </ul>
                        </div>
                        <div class="mega-column">
                            <h4 style="color: #d97706;">Girls Clothing</h4>
                            <ul>
                                <li><a href="#">Dresses</a></li>
                                <li><a href="#">Tops</a></li>
                                <li><a href="#">Clothing Sets</a></li>
                            </ul>
                        </div>
                        <div class="mega-column">
                            <h4 style="color: #d97706;">Toys & Games</h4>
                            <ul>
                                <li><a href="#">Learning Toys</a></li>
                                <li><a href="#">Action Figures</a></li>
                                <li><a href="#">Soft Toys</a></li>
                            </ul>
                        </div>
                    </div>
                </li>
                
                <li><a href="electronics.html">Electronics</a></li>
                <li><a href="household.html">Household</a></li>
                <li><a href="trial.html" style="font-weight: bold; color: var(--accent-color);">Virtual Trial Room <i class='bx bxs-magic-wand'></i></a></li>
            </ul>

            <div class="nav-icons">
                <div class="icon-item" title="Profile">
                    <i class='bx bx-user'></i>
                </div>
                <div class="icon-item cart-icon" title="Cart">
                    <i class='bx bx-shopping-bag'></i>
                    <span class="cart-count">0</span>
                </div>
                <div class="menu-toggle">
                    <i class='bx bx-menu'></i>
                </div>
            </div>
        </div>
        <!-- Mobile Menu Search -->
        <div class="mobile-search">
            <input type="text" placeholder="Search for products...">
            <i class='bx bx-search'></i>
        </div>
    </nav>
    `;

    const container = document.getElementById("navbar-container");
    if (container) {
        container.innerHTML = navbarHTML;
    }

    // Re-attach menu toggle event listeners
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = menuToggle.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('bx-menu');
                icon.classList.add('bx-x');
            } else {
                icon.classList.remove('bx-x');
                icon.classList.add('bx-menu');
            }
        });
    }

    // Sticky Navbar logic
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = 'var(--shadow-md)';
            navbar.style.padding = '0.5rem 0';
        } else {
            navbar.style.boxShadow = 'none';
            navbar.style.padding = '1rem 0';
        }
    });
});
