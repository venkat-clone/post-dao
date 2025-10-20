const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class PostDao {
    // Create a new post
    async createPost(data) {
        return await prisma.post.create({
            data,
        });
    }

    // Get a post by ID
    async getPostById(id) {
        return await prisma.post.findUnique({
            where: { id },
        });
    }

    // Get all posts
    async getAllPosts() {
        return await prisma.post.findMany();
    }

    // Update a post by ID
    async updatePost(id, data) {
        return await prisma.post.update({
            where: { id },
            data,
        });
    }

    // Delete a post by ID
    async deletePost(id) {
        return await prisma.post.delete({
            where: { id },
        });
    }
}

module.exports = new PostDao();
