import { Request, Response, NextFunction } from 'express';
import axios, { AxiosResponse } from 'axios';

interface Post {
    userId: number;
    id: Number;
    title: String;
    body: String;
}

const getTest = async (req: Request, res: Response, next: NextFunction) => {
    console.log("getTest Running");
    return res.status(200).json({
        message: "This is a get test"
    });
}

const postTest = async (req: Request, res: Response, next: NextFunction) => {
    console.log("postTest Running")
    return res.status(200).json({
        message: "This is a post test"
    });
}

export default { getTest, postTest };
