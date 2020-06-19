import React from "react";
import { Upload, message } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import axios from "axios";

function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
}

function beforeUpload(file) {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
        message.error("You can only upload JPG/PNG file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error("Image must smaller than 2MB!");
    }
    return isJpgOrPng && isLt2M;
}

class UploadAttachment extends React.Component {
    state = {
        loading: false,
    };

    handleChange = async (info) => {
        console.log(info);
        const formData = new FormData();
        formData.append("questionImage", info.file.originFileObj);
        const res = await axios.post("http://localhost:5000/api/questions/upload-image", formData, { headers: { "Content-Type": "multipart/form-data" } });
    };

    render() {
        const uploadButton = (
            <div>
                {this.state.loading ? <LoadingOutlined /> : <PlusOutlined />}
                <div className='ant-upload-text'>Upload</div>
            </div>
        );
        const { imageUrl } = this.state;
        return (
            <Upload name='avatar' listType='picture-card' className='avatar-uploader' showUploadList={false} beforeUpload={beforeUpload} onChange={this.handleChange}>
                {imageUrl ? <img src={imageUrl} alt='avatar' style={{ width: "100%" }} /> : uploadButton}
            </Upload>
        );
    }
}

export default UploadAttachment;
