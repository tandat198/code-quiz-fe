import React from "react";
import { Table, Button } from "antd";
import CreateQuestionModal from "../CreateQuestionModal";

const columns = [
    {
        title: "Text",
        dataIndex: "text",
    },
    {
        title: "Attachment",
        dataIndex: "attachment",
    },
];

const data = [];

class QuestionTable extends React.Component {
    state = {
        selectedRowKeys: [], // Check here to configure the default column
        loading: false,
    };

    start = () => {
        this.setState({ loading: true });

        setTimeout(() => {
            this.setState({
                selectedRowKeys: [],
                loading: false,
            });
        }, 1000);
    };

    onSelectChange = (selectedRowKeys) => {
        console.log("selectedRowKeys changed: ", selectedRowKeys);
        this.setState({ selectedRowKeys });
    };

    render() {
        const { loading, selectedRowKeys } = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
        };
        const hasSelected = selectedRowKeys.length > 0;
        return (
            <div>
                <div style={{ marginBottom: 16, display: "flex", justifyContent: "space-between" }}>
                    <div>
                        <Button type='primary' onClick={this.start} disabled={!hasSelected} loading={loading}>
                            Reload
                        </Button>
                        <span style={{ marginLeft: 8 }}>{hasSelected ? `Selected ${selectedRowKeys.length} items` : ""}</span>
                    </div>
                    <div>
                        <CreateQuestionModal />
                    </div>
                </div>
                <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
            </div>
        );
    }
}

export default QuestionTable;
