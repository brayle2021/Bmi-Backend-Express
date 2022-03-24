

import express, { Application, Request, Response } from "express";
import cors from "cors";

const app: Application = express();
const port = 3002;

// Body parsing Middleware
app.use(express.json());
app.use(cors())
app.use(express.urlencoded({ extended: true }));
// Cors Issues

app.get(
    "/",
    async (req: Request, res: Response): Promise<Response> => {
        return res.status(200).send({
            message: "Hello World!",
        });
    }
);

app.get(
    "/bmicalculator",
    async (req: Request, res: Response): Promise<Response> => {
        return res.status(200).send({
            message: "BMI Calculator",
        });
    }
);

app.post(
    "/test",
    async (req: Request, res: Response): Promise<Response> => {
        const weight = req.body.weight;
        const height = req.body.height;
        let bmi:any = weight / (height * height) * 10000;
        console.log("Test Result")
        console.log(weight)
        console.log(height)
        console.log("BMI")
        console.log(bmi)
        return res.status(200).send({
            message: "Submit Succesfully for Testing",
            bmi: bmi,
        });
    }
);

try {
    app.listen(port, (): void => {
        console.log(`Connected successfully on port ${port}`);
    });
} catch (error) {
    console.error(`Error occured: ${error}`);
}

