import React, { useEffect, useState } from "react"
import { useGetTestQuery, usePostTestMutation } from "../api/simpleApi"
import { Fragment } from "react";

export function One() {
    const { data: getTest }: any = useGetTestQuery();

    useEffect(() => {
        console.log(getTest)

    }, [getTest]);

    return (
        <div>
            Number from server: {getTest?.number}
        </div>
    )
};

export type TwoProps = {
    propTest: string;
}
export function Two({ propTest: string }: TwoProps) {
    const [inputNumber, setInputNumber] = useState("");

    const [postTest, { data: postTestResult }] = usePostTestMutation();

    function doPost() {
        console.log("Do Post Clicked")
        postTest({ number: inputNumber })
    }

    useEffect(() => {
        console.log(postTestResult)
    }, [postTestResult])

    function inputChanged(e: React.FormEvent<HTMLInputElement>) {
        console.log("Input changed", e.currentTarget.value)
        e.preventDefault();
        setInputNumber(e.currentTarget.value);
    }

    return (
        <Fragment>
            <div>
                Number: 2
            </div>
            <input value={inputNumber} onChange={inputChanged} type="text"></input>
            <button onClick={doPost}>Do Post</button>
        </Fragment>
    )
}