import { Card } from "@/components/ui"
import { useState } from "react";
import { Button, Form, Modal, Input, Upload, Table, InputNumber } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import ShortUniqueId from "short-unique-id";
import Column from "antd/es/table/Column";


const uid = new ShortUniqueId({ length: 6 });

const Products = () => {
    const [isProductAddModalOpen, setIsProductAddModalOpen] = useState(false);
    const [form] = Form.useForm();

    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');
    const [fileList, setFileList] = useState([]);

    const [tableParams, setTableParams] = useState({
        pagination: {
            current: 1,
            total: 55,
            pageSize: 10,
        },
    });


    const products = [
        {
            key: 1,
            title: 'Burning Monogram T-shirt',
            price: 35,
            stock: 5,
            images: ['./src/assets/images/product_01_01.webp', '02']
        },
        {
            key: 2,
            title: 'Burning Monogram T-shirt',
            price: 35,
            stock: 5,
            images: ['./src/assets/images/product_01_01.webp']
        },
        {
            key: 3,
            title: 'Burning Monogram T-shirt',
            price: 35,
            stock: 5,
            images: ['./src/assets/images/product_01_01.webp']
        },
        {
            key: 4,
            title: 'Burning Monogram T-shirt',
            price: 35,
            stock: 5,
            images: ['./src/assets/images/product_01_01.webp']
        },
    ]

    const categories = [
        {
            id: 1,
            name: 'Men',
            slug: 'men',
            children: [
                {
                    id: 1,
                    name: 'Bags',
                    slug: 'bags'
                },
                {
                    id: 2,
                    name: 'Pants',
                    slug: 'pants',
                }
            ]
        },
        {
            id: 2,
            name: 'Women',
            slug: 'women',
            children: [
                {
                    id: 1,
                    name: 'Bags',
                    slug: 'bags',
                    children: [
                        {
                            id: 1,
                            name: 'Hand Bags',
                            slug: 'hand-bags'
                        },
                        {
                            id: 2,
                            name: 'School Bags',
                            slug: 'school-bags',
                        }
                    ]
                }
            ]
        }
    ]

    const RecursiveCategoryRender = ({ categories, ulKey = '', ulClass = "" }) => {
        return (
            <ul key={ulKey} className={`list-none ${ulClass}`}>
                {categories.length > 0 ? (
                    categories.map((cat, index) => {
                        const liKey = `${ulKey}_li_${index}`;
                        return (
                            <li key={liKey} className="relative my-1">
                                <label key={'label_' + liKey} className="flex items-center gap-2"><input type="checkbox" name="category[]" id="category" value={cat.slug} />  {cat.name}</label>
                                {cat.children?.length > 0 ? (
                                    <RecursiveCategoryRender ulKey={liKey} categories={cat.children} ulClass="translate-x-4" />
                                ) : ''}
                            </li>
                        );
                    })
                ) : ''}
            </ul>
        );
    }

    /* Modal Methods */
    const showProductAddModal = () => {
        setIsProductAddModalOpen(true);
    };

    const handleModalCancel = () => {
        setIsProductAddModalOpen(false);
    };

    /* File Upload Methods */
    const getBase64 = (file) =>
        new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });


    const handleFileUploadCancel = () => setPreviewOpen(false);

    const handleFilePreview = async (file) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
        setPreviewImage(file.url || file.preview);
        setPreviewOpen(true);
        setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
    };

    const handleFileUploadChange = ({ fileList: newFileList }) => {
        setFileList(newFileList);
    }

    const uploadButton = (
        <button
            style={{
                border: 0,
                background: 'none',
            }}
            type="button"
        >
            <PlusOutlined />
            <div
                style={{
                    marginTop: 8,
                }}
            >
                Upload
            </div>
        </button>
    );


    /* Form handle methods */
    const handleAddProductFormSubmit = (event) => {
        console.log(event)
    }


    return (
        <div>
            <Modal
                open={isProductAddModalOpen}
                onCancel={handleModalCancel}
                title="Add new product"
                footer={[
                    <Button onClick={handleModalCancel} key={'cancel'}>Cancle</Button>,
                    <Button key={'publish'} htmlType="submit" type="primary" form="product_add_form">Publish</Button>
                ]}
                centered
                maskClosable={false}
                width={1200}
            >
                <div style={{ maxHeight: 'calc(100vh - 150px)' }} className="overflow-x-auto">
                    <Form
                        form={form}
                        layout="vertical"
                        id="product_add_form"
                        onFinish={handleAddProductFormSubmit}
                    >
                        <div className="flex">
                            <div className="w-1/2 px-2">
                                <Form.Item label="Product Title" name={'title'} >
                                    <Input type="text" placeholder="Enter product title" />
                                </Form.Item>

                                <Form.Item label="Description" name={"description"}>
                                    <Input.TextArea placeholder="Enter description" />
                                </Form.Item>

                                <Form.Item>
                                    <div className="max-h-[200px] w-auto overflow-y-scroll overflow-x-clip p-2 border rounded-lg">
                                        <RecursiveCategoryRender ulKey={uid.rnd()} categories={categories} />
                                    </div>
                                </Form.Item>

                                <div className="columns-2 mt-4">
                                    <Form.Item name={'price'} label="Price">
                                        <Input type="number" placeholder="Enter ammount" addonAfter={'$'} />
                                    </Form.Item>
                                    <Form.Item name={'discount_price'} label="Discount Price">
                                        <Input type="number" placeholder="Enter discount ammount" addonAfter={'$'} />
                                    </Form.Item>
                                </div>
                            </div>
                            <div className="w-1/2 px-2">
                                <Form.Item label="Upload Images">
                                    <p className="mb-2 text-text">First iamge will be product thumbnail.</p>
                                    <Upload
                                        listType="picture-card"
                                        fileList={fileList}
                                        onPreview={handleFilePreview}
                                        onChange={handleFileUploadChange}
                                        multiple
                                    >
                                        {fileList.length >= 8 ? null : uploadButton}
                                    </Upload>
                                    <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleFileUploadCancel}>
                                        <img
                                            alt="example"
                                            style={{
                                                width: '100%',
                                            }}
                                            src={previewImage}
                                        />
                                    </Modal>
                                </Form.Item>

                                <Form.Item name={'stock'} label="Stock ammount">
                                    <InputNumber name="stock" placeholder="Stock ammount" addonAfter={"Pice"} />
                                </Form.Item>
                            </div>
                        </div>
                    </Form>
                </div>
            </Modal>

            {/* Products Table */}
            <div>
                <div className="flex justify-between mb-2 px-2">
                    <div><h1 className="text-heading font-semibold text-lg">All Products</h1></div>
                    <div>
                        <Button onClick={showProductAddModal} size="large" icon={<PlusOutlined />}>Add New</Button>
                    </div>
                </div>
                <Card>
                    <Table dataSource={products} pagination={tableParams.pagination}>
                        <Column title="Title" key={'title'} render={(_, record) => <h3 className="text-base font-semibold text-heading">{record.title}</h3>} />
                        <Column
                            title={"Thumbnail"}
                            key={"thumbnail"}
                            render={(_, record) => {
                                return <div className={`bg-[url('${record.images[0]}')] w-[50px] h-[50px] bg-cover`}></div>
                            }}
                        />
                        <Column title="Price" dataIndex={"price"} key={"price"} />
                        <Column title="Category" key={"category"} render={(_, record) => <span>Men</span>} />
                        <Column title="Stock" dataIndex={"stock"} key={"stock"} />
                        <Column
                            title="Action"
                            key={"action"}
                            render={(_, record) => {
                                return (
                                    <div className="flex gap-2">
                                        <Button className="border-yellow-400">Edit</Button>
                                        <Button danger>Delete</Button>
                                    </div>
                                )
                            }}
                        />
                    </Table>
                </Card>
            </div>
        </div>
    )
}

export default Products;