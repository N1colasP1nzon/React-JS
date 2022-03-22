import './NavBar.css'

const NavBar = () => {
    return (
        <section class="arreglos">
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        <img src="./imagenes/SDGF.png" alt="" width="80" height="80" />
                    </a>
                </div>
                <div class="container-fluid">
                    <div class="collapse navbar-collapse arreglos" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Nosotros</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#"></a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Precios
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><a class="dropdown-item" href="#">Contadores</a></li>
                                    <li><a class="dropdown-item" href="#">Pymes</a></li>
                                    <li><a class="dropdown-item" href="#">Empresas</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </section>
    )
}

export default NavBar