import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import { StaticDateTimePicker } from "@mui/x-date-pickers/StaticDateTimePicker";
import DataTable from "../Components/Table";
import Charts from "../Components/Charts";
import {
  LocalizationProvider,
  MobileDateTimePicker,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const Indi = () => {
  const [tablesData, setTablesData] = useState([]);
  const [selectedEndpoint, setSelectedEndpoint] = useState("apfc1data");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [orderBy, setOrderBy] = useState("");
  const [order, setOrder] = useState("asc");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [timeperiod, setTimeperiod] = useState("");
  const [loading, setLoading] = useState(false);

  const apiEndpoints = {
    apfc1data: "http://localhost:8000/api/apfc1data/",
    apfc2data: "http://localhost:8000/api/apfc2data/",
    apfc3data: "http://localhost:8000/api/apfc3data/",
    apfc4data: "http://localhost:8000/api/apfc4data/",
    apfc5data: "http://localhost:8000/api/apfc5data/",
    dg1data: "http://localhost:8000/api/dg1data/",
    dg2data: "http://localhost:8000/api/dg2data/",
    dg3data: "http://localhost:8000/api/dg3data/",
    dg4data: "http://localhost:8000/api/dg4data/",
    dg5data: "http://localhost:8000/api/dg5data/",
    dg6data: "http://localhost:8000/api/dg6data/",
    og1data: "http://localhost:8000/api/og1data/",
    og2data: "http://localhost:8000/api/og2data/",
    og3data: "http://localhost:8000/api/og3data/",
    og4data: "http://localhost:8000/api/og4data/",
    og5data: "http://localhost:8000/api/og5data/",
    og6data: "http://localhost:8000/api/og6data/",
    solfeeddata: "http://localhost:8000/api/solfeeddata/",
    tf1data: "http://localhost:8000/api/tf1data/",
    tf2data: "http://localhost:8000/api/tf2data/",
    tf3data: "http://localhost:8000/api/tf3data/",
    tf4data: "http://localhost:8000/api/tf4data/",
    tf5data: "http://localhost:8000/api/tf5data/",
    wmt0: "http://localhost:8000/api/wmt0/",
    wmt1: "http://localhost:8000/api/wmt1/",
    wmt2: "http://localhost:8000/api/wmt2/",
    wmwm1: "http://localhost:8000/api/wmwm1/",
    wmwm2: "http://localhost:8000/api/wmwm2/",
    wmwm3: "http://localhost:8000/api/wmwm3/",
    wmwm4: "http://localhost:8000/api/wmwm4/",
    wmwm5: "http://localhost:8000/api/wmwm5/",
    wmwm6: "http://localhost:8000/api/wmwm6/",
    wmwm7: "http://localhost:8000/api/wmwm7/",
    wmwm8: "http://localhost:8000/api/wmwm8/",
    wmwm9: "http://localhost:8000/api/wmwm9/",
  };

  useEffect(() => {
    fetchData(selectedEndpoint);
  }, [selectedEndpoint, startDate, endDate, timeperiod]); // Include timeperiod in the dependency array

  const fetchData = async (endpoint) => {
    try {
      if (!endpoint) return;

      setLoading(true);

      let url = apiEndpoints[endpoint];
      if (startDate && endDate) {
        url += `?start_date_time=${startDate.toISOString()}&end_date_time=${endDate.toISOString()}&resample_period=${timeperiod}`;
      } else {
        url += `?resample_period=${timeperiod}`;
      }

      const response = await axios.get(url);
      setTablesData(response.data.results);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const filteredData = useMemo(() => {
    if (startDate && endDate) {
      return tablesData.filter((item) => {
        const dateTime = new Date(item.date_time); // Adjust based on the date-time property in your tablesData
        return dateTime >= startDate && dateTime <= endDate;
      });
    }
    return tablesData;
  }, [startDate, endDate, tablesData]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div className="container-fluid">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1
          className="h3 mb-0 text-gray-800"
          style={{ textTransform: "capitalize" }}
        >
          {selectedEndpoint}
        </h1>
        <div style={{ marginRight: "2vw", marginLeft: "auto" }}>
          <FormControl size="small">
            <InputLabel id="select-endpoint-label">Select Subsystem</InputLabel>
            <Select
              labelId="select-endpoint-label"
              id="select-endpoint"
              value={selectedEndpoint}
              onChange={(e) => setSelectedEndpoint(e.target.value)}
              label="Select Subsystem"
            >
              {Object.keys(apiEndpoints).map((endpointKey) => (
                <MenuItem key={endpointKey} value={endpointKey}>
                  {endpointKey}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        <a
          href="#"
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i className="fas fa-download fa-sm text-white-50"></i> Generate
          Report
        </a>
      </div>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        {/* Your UI elements */}
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <MobileDateTimePicker
            orientation="landscape"
            label="Start Date-Time"
            value={startDate}
            onChange={(newValue) => setStartDate(newValue)}
          />
          <MobileDateTimePicker
            orientation="landscape"
            label="End Date-Time"
            value={endDate}
            onChange={(newValue) => setEndDate(newValue)}
          />
        </LocalizationProvider>
        {/* Rest of your UI */}
      </div>

      {/* Your Charts component */}
      <Charts
        data={filteredData}
        timeperiod={timeperiod}
        setTimeperiod={setTimeperiod}
      />

      {/* Your DataTable component */}
      <div style={{ marginTop: "5vh" }}>
        {selectedEndpoint && (
          <DataTable
            tablesData={tablesData}
            orderBy={orderBy}
            order={order}
            handleRequestSort={handleRequestSort}
            sortedData={filteredData}
            page={page}
            rowsPerPage={rowsPerPage}
            handleChangePage={handleChangePage}
            handleChangeRowsPerPage={handleChangeRowsPerPage}
            selectedEndpoint={selectedEndpoint}
          />
        )}
      </div>
    </div>
  );
};

export default Indi;
