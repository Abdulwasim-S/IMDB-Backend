import express from "express";
import SignupComp from "../component/users/signup.js";
import LoginComp from "../component/users/login.js";
import WelcomeComp from "../component/welcome/welcome.js";
import TestComp from "../component/test.js";
import Auth from "../helper/authentication.js";
import ProducerComp from "../component/producers/add_producer.js";
import ActorComp from "../component/actors/add_actor.js";
import ProducerListComp from "../component/producers/producer_list.js";
import ActorListComp from "../component/actors/actor_list.js";

const router = express.Router();

// WELCOME
router.get("/", WelcomeComp);

// ****TO BE REMOVED AFTER DEVELOPEMENT****//
router.post("/test", Auth, TestComp);

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

export default router;
