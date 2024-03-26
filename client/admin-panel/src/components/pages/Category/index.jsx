import React, { useState, useEffect } from 'react';
import { Button, Table, Modal, Form, Input, TreeSelect, Popconfirm } from 'antd';
import { PlusOutlined } from '@ant-design/icons'
import toast from 'react-hot-toast';
import ShortUniqueId from 'short-unique-id';
const uid = new ShortUniqueId({ length: 10 });

const Category = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [categories, setCategories] = useState([]);
    const [parentCategories, setParentCategories] = useState([]);
    const [isParentSelectorLoading, setIsParentSelectorLoading] = useState(false);
    const [form] = Form.useForm();
    const [isTableLoading, setIsTableLoading] = useState(false);
    const [pagination, setPagination] = useState({
        current: 1,
        pageSize: 10,
        total: 50,
    });
    const [tableOptions, setTableOptions] = useState({});
    const [editId, setEditId] = useState(null);


    useEffect(() => {
        fetchCategories();
    }, []);

    useEffect(() => {
        fetchCategories();
    }, [tableOptions]);

    const handleParentFocus = async () => {
        try {
            setIsParentSelectorLoading(true);
            const response = await fetch(import.meta.env.VITE_API_BASE_URL + '/admin/categories?limit=0');
            if (response.status == 200) {
                const result = await response.json();
                setIsParentSelectorLoading(false);
                setParentCategories(result.data);
            }
        } catch (err) {
            console.log(err)
        }
    }

    const fetchCategories = async () => {
        // Fetch all categories from the API and set the state
        // Also handle pagination, sorting, and filtering
        let searchParamOptions = {};
        let url = new URL(import.meta.env.VITE_API_BASE_URL + '/admin/categories');

        if (tableOptions.pagination?.current) searchParamOptions.page = tableOptions.pagination.current;
        if (tableOptions.pagination?.pageSize && tableOptions.pagination.pageSize > 2) searchParamOptions.limit = tableOptions.pagination.pageSize;
        if (tableOptions.sorter?.column) searchParamOptions.sort = tableOptions.sorter.field;
        if (tableOptions.sorter?.order) searchParamOptions.order = tableOptions.sorter.order.replace('end', '');

        url.search = new URLSearchParams(searchParamOptions).toString();

        try {
            setIsTableLoading(true);
            const response = await fetch(url);
            if (response.status == 200) {
                const result = await response.json();
                console.log(result.data)
                setCategories(result.data);
                setPagination(result.pagination)
                setIsTableLoading(false);
            }
        } catch (err) {
            console.log(err)
        }
    };

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleSubmitForm = () => {
        form.validateFields().then(async (values) => {
            const categoryToast = toast.loading('Saving category...');
            let url = import.meta.env.VITE_API_BASE_URL + '/admin/categories';
            let method = 'POST';

            if (editId) {
                url = import.meta.env.VITE_API_BASE_URL + '/admin/categories/' + editId;
                method = 'PATCH';
            }

            try {
                const response = await fetch(url, {
                    method,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(values),
                    credentials: 'include'
                })

                if (response.status === 201) {
                    const result = await response.json();

                    toast.success(result.message, { id: categoryToast });
                    setIsModalVisible(false);
                    form.resetFields();
                    fetchCategories();
                } else if (response.status === 200) {
                    const result = await response.json();
                    toast.success(result.message, { id: categoryToast });
                    fetchCategories();
                } else {
                    const result = await response.json();
                    toast.error(result.message, { id: categoryToast });
                }

            } catch (error) {
                console.error('Error creating category:', error);
                toast.error('Error creating category', { id: categoryToast });
            }
        })
            .catch((error) => {
                toast.error('Please fill in all required fields');
            })
    };

    const handleCancel = () => {
        setIsModalVisible(false);
        form.resetFields();
        setEditId(null);
    };

    const handleTableChange = (pagination, filters, sorter) => {
        // Handle table sorting and pagination here
        setTableOptions({ pagination, filters, sorter });
    };

    const handleEdit = async (event) => {
        // Fetch category details and populate the form values
        const id = event.currentTarget.dataset.id;

        try {
            const response = await fetch(import.meta.env.VITE_API_BASE_URL + '/admin/categories/' + id, {
                method: 'GET',
                credentials: 'include'
            });
            if (response.status == 200) {
                const result = await response.json();
                console.log(result.data)
                setIsModalVisible(true);
                setEditId(result.data._id);
                form.setFieldsValue({
                    name: result.data.name,
                    parent: {
                        label: result.data.parent?.name,
                        value: result.data.parent?.slug
                    }
                });
            }
        } catch (err) {
            console.log(err)
        }
    }

    const handleDelete = (id) => async () => {
        // Delete category

        const deleteToast = toast.loading('Deleting category...');
        try {
            const response = await fetch(import.meta.env.VITE_API_BASE_URL + '/admin/categories/' + id, {
                method: 'DELETE',
                credentials: 'include'
            });
            if (response.status == 200) {
                toast.success('Category deleted successfully', { id: deleteToast });
                fetchCategories();
            }
        } catch (err) {
            console.log(err)
            toast.error('Error deleting category', { id: deleteToast });
        }

    }

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            sorter: true,
        },
        {
            title: 'Slug',
            dataIndex: 'slug',
            key: 'slug',
        },
        {
            title: 'Products',
            key: 'products',
            render: (_, record) => (
                <span>{record.products.length}</span>
            )
        },
        {
            title: 'Actions',
            key: 'actions',
            render: (_, record) => (
                <div className="flex">
                    <Button onClick={handleEdit} data-id={record._id} type="link">Edit</Button>
                    <Popconfirm
                        title="Delete Category"
                        description="Are you sure to delete this category?"
                        onConfirm={handleDelete(record._id)}
                    >
                        <Button type="link">Delete</Button>
                    </Popconfirm>
                </div>
            )
        }
    ];


    return (
        <div>
            <div className="flex justify-between mb-2 px-2">
                <div><h1 className="text-heading font-semibold text-lg">All Categories</h1></div>
                <div>
                    <Button type="primary" onClick={showModal} icon={<PlusOutlined />} style={{ marginBottom: 16 }}>
                        Add New
                    </Button>
                </div>
            </div>
            <Table
                columns={columns}
                dataSource={categories}
                pagination={pagination}
                onChange={handleTableChange}
                rowKey={'_id'}
                loading={isTableLoading}
            />

            <Modal
                title="Add New Category"
                open={isModalVisible}
                onOk={handleSubmitForm}
                onCancel={handleCancel}
                okText="Create"
            >
                <Form form={form}>
                    <Form.Item label="Name" name="name" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="Parent Category" name="parent">
                        <TreeSelect loading={isParentSelectorLoading} onFocus={handleParentFocus} treeData={parentCategories} fieldNames={{ label: 'name', value: 'slug' }} treeDefaultExpandAll />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
};

export default Category;
