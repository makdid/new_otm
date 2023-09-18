import React from "react";
import PrintOutlinedIcon from "@mui/icons-material/PrintOutlined";
import { Button } from "@mui/material";
import { grey } from "@mui/material/colors";

// const Printer = () => {

class Printer extends React.Component {
    handlePrint = () => {
        window.print();
    }

    render() {
        return (
            <div>
                <Button onClick={this.handlePrint}
                sx={{
                    backgroundColor: grey[700],
                    color: grey[100],
                    fontSize: "14px",
                    fontWeight: "bold",
                    padding: "10px 20px",
                }}
                >
                    <PrintOutlinedIcon/>
                </Button>
            </div>
        );
    }
}
// }

export default Printer;