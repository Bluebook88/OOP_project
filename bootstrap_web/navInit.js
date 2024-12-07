document.write(`
    <nav class="navbar bg-dark navbar-dark p-3 navbar-expand-sm">
        <div class="container">
            <a href="index.html" class="navbar-brand">License System</a>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto">

                    <li class="nav-item">
                        <a href="#" class="nav-link">Test</a>
                    </li>

                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            User
                        </a>

                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item" href="userList.html">User List</a></li>
                            <li> 
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="addUser.html">Add User</a></li>
                            <li><a class="dropdown-item" href="#">Update User</a></li>
                            <li><a class="dropdown-item" href="#">Delete User</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
`);