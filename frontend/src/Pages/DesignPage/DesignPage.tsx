import React from 'react'
import Table from "../../Components/Table/Table"
import RatioList from '../../Components/RatioList/RatioList'
import { testIncomeStatementData } from '../../Components/Table/testData';

type Props = {
}

const tableConfig = [
    {
      label: "Market Cap",
      render: (company: any) => company.symbol,
      subTitle: "Total value of all a company's shares of stock",
    },
];


const DesignPage = (props: Props) => {
    return (
        <>
            <h1>NetReactFin Design Page</h1>
            <h2>This is NetReactFin's design page. This is where we will house various design aspects of the app</h2>
            <RatioList data={testIncomeStatementData} config={tableConfig} />
            <Table data={testIncomeStatementData} config={tableConfig}/>
            <h3>
                Table - Table takes in a data prop which is an array of objects. Each object represents a row in the table. The keys of the object represent the columns of the table. The values of the object represent the data in the table. The columns of the table are generated from the keys of the first object in the data array. The data prop is required.
            </h3>
        </>
    )
}

export default DesignPage