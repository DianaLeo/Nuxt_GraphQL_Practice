import {H3Event} from "h3"
import {initSocket} from "../utils";

export default defineEventHandler(async (event: H3Event) => initSocket(event))