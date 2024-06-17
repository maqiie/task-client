// src/cable.js
import { createConsumer } from "@rails/actioncable";

const consumer = createConsumer("ws://localhost:3001/cable");

export default consumer;
