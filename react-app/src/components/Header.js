import React from "react";
import "../styles/style.css";

const Header=(props)=>{
    const user= JSON.parse(localStorage.getItem('User'));
    let greeting='';
    if(user){
        greeting='Hello '+ user.name+ ',';
    }else greeting='Hello Guest,'
    return(
        <div className="menu">
            <img src='../styles/GitHub-Mark-120px-plus-350x190.png' class='logo' />
            <h3>{greeting}</h3>
        </div>
    );


    // <div class="container-fluid position-relative nav-bar p-0">
    //     <div class="position-relative px-lg-5" style="z-index: 9;">
    //         <nav class="navbar navbar-expand-lg bg-secondary navbar-dark py-3 py-lg-0 pl-3 pl-lg-5">
    //             <a href="" class="navbar-brand">
    //                 <h1 class="text-uppercase text-primary mb-1">Royal Cars</h1>
    //             </a>
    //             <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
    //                 <span class="navbar-toggler-icon"></span>
    //             </button>
    //             <div class="collapse navbar-collapse justify-content-between px-3" id="navbarCollapse">
    //                 <div class="navbar-nav ml-auto py-0">
    //                     <a href="index.html" class="nav-item nav-link active">Home</a>
    //                     <a href="about.html" class="nav-item nav-link">About</a>
    //                     <a href="service.html" class="nav-item nav-link">Service</a>
    //                     <div class="nav-item dropdown">
    //                         <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Cars</a>
    //                         <div class="dropdown-menu rounded-0 m-0">
    //                             <a href="car.html" class="dropdown-item">Car Listing</a>
    //                             <a href="detail.html" class="dropdown-item">Car Detail</a>
    //                             <a href="booking.html" class="dropdown-item">Car Booking</a>
    //                         </div>
    //                     </div>
    //                     <div class="nav-item dropdown">
    //                         <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Pages</a>
    //                         <div class="dropdown-menu rounded-0 m-0">
    //                             <a href="team.html" class="dropdown-item">The Team</a>
    //                             <a href="testimonial.html" class="dropdown-item">Testimonial</a>
    //                         </div>
    //                     </div>
    //                     <a href="contact.html" class="nav-item nav-link">Contact</a>
    //                 </div>
    //             </div>
    //         </nav>
    //     </div>
    // </div>
//     <div class="container-fluid bg-dark py-3 px-lg-5 d-none d-lg-block">
//     <div class="row">
//         <div class="col-md-6 text-center text-lg-left mb-2 mb-lg-0">
//             <div class="d-inline-flex align-items-center">
//                 <a class="text-body pr-3" href=""><i class="fa fa-phone-alt mr-2"></i>+012 345 6789</a>
//                 <span class="text-body">|</span>
//                 <a class="text-body px-3" href=""><i class="fa fa-envelope mr-2"></i>info@example.com</a>
//             </div>
//         </div>
//         <div class="col-md-6 text-center text-lg-right">
//             <div class="d-inline-flex align-items-center">
//                 <a class="text-body px-3" href="">
//                     <i class="fab fa-facebook-f"></i>
//                 </a>
//                 <a class="text-body px-3" href="">
//                     <i class="fab fa-twitter"></i>
//                 </a>
//                 <a class="text-body px-3" href="">
//                     <i class="fab fa-linkedin-in"></i>
//                 </a>
//                 <a class="text-body px-3" href="">
//                     <i class="fab fa-instagram"></i>
//                 </a>
//                 <a class="text-body pl-3" href="">
//                     <i class="fab fa-youtube"></i>
//                 </a>
//             </div>
//         </div>
//     </div>
// </div>
};

export default Header;

