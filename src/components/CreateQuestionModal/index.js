import React from "react";
import { Modal, Button } from "antd";
import FormInModal from "../FormInModal";

class CreateQuestionModal extends React.Component {
    state = {
        visible: false,
        confirmLoading: false,
    };

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = () => {
        this.setState({
            confirmLoading: true,
        });
        setTimeout(() => {
            this.setState({
                visible: false,
                confirmLoading: false,
            });
        }, 2000);
    };

    handleCancel = () => {
        this.setState({
            visible: false,
        });
    };

    render() {
        const { visible, confirmLoading } = this.state;
        return (
            <div>
                <Button type='primary' onClick={this.showModal}>
                    Create Question
                </Button>
                <Modal title='Create Question' visible={visible} onOk={this.handleOk} confirmLoading={confirmLoading} onCancel={this.handleCancel}>
                    <FormInModal />
                </Modal>
            </div>
        );
    }
}

export default CreateQuestionModal;
