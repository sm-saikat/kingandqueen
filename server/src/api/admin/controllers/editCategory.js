const CustomError = require('../../../utils/CustomError');
const Category = require('../models/Category');


const editCategory = async (req, res, next) => {
    const id = req.params.id;
    let {name, parent} = req.body;
    parent = parent.value ? parent.value : parent;
    console.log(parent);

    try{
        const category = await Category.findById(id);

        if(!category){
            throw new CustomError('Category not found', 404);
        }

        let slug = name.replace(/ /g, '-').toLowerCase();
        let parentCategory = null;

        if(parent){
            parentCategory = await Category.findOne({slug: parent});
            slug = `${parentCategory.slug}-${slug}`;
        }

        // Check if category already exists
        const categoryExists = await Category.find({slug});
        if(categoryExists.length > 0){
            slug = `${slug}-${categoryExists.length + 1}`;
        }

        category.slug = slug;

        if(name){
            category.name = name;
        }

        if(parent){
            // Update parent category
            if(category.parent){
                const oldParent = await Category.findById(category.parent);
                oldParent.children.pull(id);
                await oldParent.save();
            }

            const newParent = await Category.findOne({slug: parent});
            category.parent = newParent._id;
            newParent.children.push(category._id);
            await newParent.save();
        }

        await category.save();

        res.status(200).json({
            message: 'Category updated successfully',
            data: category
        });
    }catch(err){
        next(err);
    }
}

module.exports = editCategory;