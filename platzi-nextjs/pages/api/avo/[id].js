import { IncomingMessage, ServerResponse } from "http";
import DB from "../../../database/db";

const allAvos = async (request, response) => {
  const db = new DB();

  const id = request.query.id;

  const entry = await db.getById(id);

  //   response.statusCode = 200; //ok
  //   response.setHeader("Content-type", "application/json");
  //   response.end(JSON.stringify({ data: entry }));

  //Lo siguiente es identico a lo comentado anteriormente
  response.status(200).json(entry);
};

export default allAvos;
