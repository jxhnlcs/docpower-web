<template>
    <div class="wrapper" >
        <div class="section">
            <div class="top_navbar">
                <div class="hamburger">
                    <a href="#">
                        <i class="fas fa-bars"></i>
                    </a>
                </div>
            </div>
        </div>
        <div class="sidebar">
            <div class="profile">
                <img src="../assets/img/whiteLogo.png">
                <h3>Bem-vindo</h3>
            </div>
            <ul>
                <li>
                    <router-link to="/cadastroCliente">
                        <a href="#">
                            <span class="icon"><i class="fas fa-user-friends"></i></span>
                            <span class="item">Cadastrar Cliente</span>
                        </a>
                    </router-link>
                </li>
                <li>
                    <router-link to="/cadastroFuncionario">
                    <a href="#">
                        <span class="icon"><i class="fas fa-user-tie"></i></span>
                        <span class="item">Cadastrar Funcionário</span>
                    </a>
                </router-link>
                </li>
                <li>
                <router-link to="/cadastroDocumento">
                    <a href="#">
                        <span class="icon"><i class="fas fa-file"></i></span>
                        <span class="item">Cadastrar Documento</span>
                    </a>
                </router-link>
                </li>
                <li>
                    <router-link to="">
                        <a href="#" @click="sair">
                            <span class="icon"><i class="fas fa-power-off"></i></span>
                            <span class="item">Sair</span>
                        </a>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

export default {

    mounted() {
        var hamburger = document.querySelector(".hamburger");
        hamburger.addEventListener("click", function () {
            document.querySelector("body").classList.toggle("active");
        })
    },

    methods:{
        sair() {
            Swal.fire({
            icon: 'question',
            title: 'Deseja realmente sair?',
            text: 'Você será desconectado da sua conta.',
            showCancelButton: true,
            confirmButtonText: 'Sim',
            cancelButtonText: 'Não'
            }).then((result) => {
            if (result.isConfirmed) {
                // Realizar logout ou redirecionar para a tela de logout
                this.$router.push('/');
            }
            });
        },
    },
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
}

.wrapper .sidebar {
    background: rgb(13, 27, 64);
    position: fixed;
    top: 0;
    left: 0;
    width: 280px;
    height: 100%;
    padding: 20px 0;
    transition: all 0.5s ease;
    z-index: 10;
}

.wrapper .sidebar .profile {
    margin-bottom: 30px;
    text-align: center;
}

.wrapper .sidebar .profile img {
    display: block;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin: 0 auto;
}

.wrapper .sidebar .profile h3 {
    color: #ffffff;
    margin: 10px 0 5px;
}

.wrapper .sidebar ul li a {
    text-align: justify;
    display: block;
    padding: 12px 10px;
    color: rgb(241, 237, 237);
    font-size: 16px;
    position: relative;
    font-weight: bold;
    text-decoration: none;
}

.wrapper .sidebar ul li a .icon {
    color: #dee4ec;
    width: 30px;
    display: inline-block;
}
.wrapper .sidebar ul li a:hover,
.wrapper .sidebar ul li:hover{
    color: #0D1B40;
    background: white;
}

.wrapper .sidebar ul li:hover .icon,
.wrapper .sidebar ul li a:hover {
    color: #0D1B40;
}

.wrapper .sidebar ul li a:hover:before,
.wrapper .sidebar ul li a.active:before {
    display: block;
}

.wrapper .section {
    width: calc(100% - 280px);
    margin-left: 280px;
    transition: all 0.5s ease;
}

.wrapper .section .top_navbar {
    background: rgb(13, 27, 64);
    height: 50px;
    display: flex;
    align-items: center;
    padding: 0 30px;
}

.wrapper .section .top_navbar .hamburger a {
    font-size: 28px;
    color: #f4fbff;
    margin-left: -15px;
}

body.active .wrapper .sidebar {
    left: -280px;
}

body.active .wrapper .section {
    margin-left: 0;
    width: 100%;
}

@media (max-width: 767px) {
    .wrapper .sidebar .profile img {
      width: 60px;
      height: 60px;
    }

    .wrapper .sidebar .profile h3 {
      font-size: 14px;
    }

    .profile h3{
        display: none;
    }

    .wrapper .sidebar ul li a .icon {
      text-align: center;
    }

    .wrapper .sidebar ul li a .item {
      display: none;
    }

    .wrapper .sidebar {
        width: 80px;
    }

    .wrapper .section {
        width: calc(100% - 80px);
        margin-left: 80px;
        transition: all 0.5s ease;
    }

    body.active .wrapper .sidebar {
        left: -80px;
    }
  }
</style>