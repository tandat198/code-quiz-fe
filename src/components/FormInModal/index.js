import React from "react";
import { Input, Modal, Button } from "antd";
import DynamicForm from "../DynamicForm";
import { Select } from "antd";
import UploadAttachment from "../UploadAttachment";

const { Option } = Select;

class FormInModal extends React.Component {
    state = { visible: false, options: [] };

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = (e) => {
        this.setState({
            visible: false,
        });
    };

    handleCancel = (e) => {
        this.setState({
            visible: false,
        });
    };

    handleOptions = (options) => {
        console.log(options);
        this.setState({ options });
    };

    render() {
        return (
            <div>
                <Input placeholder='Text' />
                {this.state.options.map((option, i) => (
                    <div key={i}>{option}</div>
                ))}
                <Modal title='Create Options' visible={this.state.visible} onOk={this.handleOk} onCancel={this.handleCancel}>
                    <DynamicForm handleOptions={this.handleOptions} />
                </Modal>
                <Select placeholder='Options' style={{ width: 120 }} allowClear>
                    {this.state.options.map((option, i) => (
                        <Option key={i} value={i}>
                            {option}
                        </Option>
                    ))}
                </Select>
                <Button type='primary' onClick={this.showModal}>
                    Create Options
                </Button>
                <UploadAttachment />
            </div>
        );
    }
}

export default FormInModal;
