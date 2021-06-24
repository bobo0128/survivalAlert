import React, { useEffect, useState } from "react";
import axios from "axios";
import BootstrapTable from "react-bootstrap-table-next";
//import "bootstrap/dist/css/bootstrap.min.css";
import paginationFactory from "react-bootstrap-table2-paginator";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.css";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import "react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css";
import "./bootstraptable.css";

function Covid() {
  console.log("Enter Covid.js.");

  const [content, setContent] = useState([]);

  const columns = [
    {
      dataField: "country",
      text: "Country",
      sort: true,
      filter: textFilter(),
    },
    {
      dataField: "cases",
      text: "Cases",
      sort: true,
    },
    {
      dataField: "todayCases",
      text: "Today Cases",
      sort: true,
    },
    {
      dataField: "deaths",
      text: "Deaths",
      sort: true,
    },
    {
      dataField: "todayDeaths",
      text: "Today Deaths",
      sort: true,
    },
    {
      dataField: "recovered",
      text: "Recovered",
      sort: true,
    },
    {
      dataField: "active",
      text: "Active",
      sort: true,
    },
  ];

  const pagination = paginationFactory({
    page: 1,
    sizePerPage: 5,
    lastPageText: ">>",
    firstPageText: "<<",
    nextPageText: ">",
    prePageText: "<",
    showTotal: true,
    alwaysShowAllBtns: true,
    onPageChange: function (page, sizePerPage) {
      console.log("page", page);
      console.log("sizePerPage", sizePerPage);
    },
    onSizePerPageChange: function (page, sizePerPage) {
      console.log("page", page);
      console.log("sizePerPage", sizePerPage);
    },
  });

  useEffect(() => {
    console.log("begin useEffect");
    async function getCountries() {
      console.log("begin getCountries");
      const res = await axios.get("https://disease.sh/v3/covid-19/countries");
      console.log("return json data from api,", res.data);
      setContent(res.data);
    }
    getCountries();
  }, []);

  return (
    <div>
      <BootstrapTable
        bootstrap4
        keyField="country"
        columns={columns}
        data={content}
        pagination={pagination}
        filter={filterFactory()}
      />
    </div>
  );
}

export default Covid;
