import express from "express";
import SignupComp from "../component/users/signup.js";
import LoginComp from "../component/users/login.js";
import WelcomeComp from "../component/welcome/welcome.js";
import Auth from "../helper/authentication.js";
import ProducerComp from "../component/producers/add_producer.js";
import ActorComp from "../component/actors/add_actor.js";
import ProducerListComp from "../component/producers/producer_list.js";
import ActorListComp from "../component/actors/actor_list.js";
import AddMovieComp from "../component/movies/add_movie.js";
import UpdateMovieComp from "../component/movies/update_movie.js";
import DeleteMovieComp from "../component/movies/delete_movie.js";
import MovieListComp from "../component/movies/movie.js";
import MovieFilterListComp from "../component/movies/movie_filter.js";

const router = express.Router();

// WELCOME
router.get("/", WelcomeComp);

// USER
router.post("/signup", SignupComp);
router.post("/login", LoginComp);

// PRODUCER
router.get("/producer", ProducerListComp);
router.post("/producer", Auth, ProducerComp);

// ACTOR
router.get("/actor", ActorListComp);
router.post("/actor", Auth, ActorComp);

// MOVIE
router.get("/movie", MovieListComp);
router.post("/movie", Auth, AddMovieComp);
router.put("/movie", Auth, UpdateMovieComp);
router.delete("/movie:id", Auth, DeleteMovieComp);

// MOVIE BY FILTER
router.get("/movie/:filter", MovieFilterListComp);

export default router;
