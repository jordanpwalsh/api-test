import { Request, Response, NextFunction } from 'express';
import axios, { AxiosResponse } from 'axios';

interface Post {
    userId: number;
    id: Number;
    title: String;
    body: String;
}

let test = 0;

const getTest = async (req: Request, res: Response, next: NextFunction) => {
    console.log("getTest Running");
    test += 1;
    return res.status(200).json({
        message: "This is a get test",
        number: test
    });
}

const postTest = async (req: Request, res: Response, next: NextFunction) => {
    console.log("postTest Running")

    let number = parseInt(req.body.number);
    console.log(req.body.number)
    test = number

    return res.status(200).json({
        message: "This is a post test",
        number: test
    });
}

export default { getTest, postTest };
