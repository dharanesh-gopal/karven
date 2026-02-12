import { createClient } from '@sanity/client';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Initialize Sanity client
const client = createClient({
  projectId: 'qyxjb4t2',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-17',
  token: process.env.SANITY_API_TOKEN,
});

// Gallery data to seed
const aboutGalleryData = {
  _type: 'aboutGallery',
  title: 'Our Journey in Pictures',
  images: [
    {
      _type: 'image',
      asset: {
        _type: 'reference',
        _ref: 'image-indian-professional-man-png'
      },
      alt: 'KarVenSen Team - Drone Training',
      caption: 'Professional drone training programs by our expert instructors'
    },
    {
      _type: 'image', 
      asset: {
        _type: 'reference',
        _ref: 'image-indian-woman-professional-png'
      },
      alt: 'KarVenSen Team - Software Development',
      caption: 'Innovative software solutions developed by our talented team'
    },
    {
      _type: 'image',
      asset: {
        _type: 'reference', 
        _ref: 'image-indian-professor-man-jpg'
      },
      alt: 'KarVenSen Team - AI Research',
      caption: 'Cutting-edge AI research and development initiatives'
    },
    {
      _type: 'image',
      asset: {
        _type: 'reference',
        _ref: 'image-staff-teaches-to-std-png'
      },
      alt: 'KarVenSen Team - Education',
      caption: 'Comprehensive educational programs and hands-on training'
    },
    {
      _type: 'image',
      asset: {
        _type: 'reference',
        _ref: 'image-drone-flying-over-farm-field-at-sunset-jpg'
      },
      alt: 'KarVenSen - Drone Operations',
      caption: 'Advanced drone operations in agriculture and surveillance'
    },
    {
      _type: 'image',
      asset: {
        _type: 'reference',
        _ref: 'image-dron-in-agri-land-png'
      },
      alt: 'KarVenSen - Agriculture Solutions', 
      caption: 'Smart agriculture solutions powered by drone technology'
    }
  ],
  autoplayInterval: 4000,
  isActive: true
};

async function seedAboutGallery() {
  try {
    console.log('🌱 Starting About Gallery seeding...');

    // Check if gallery already exists
    const existingGallery = await client.fetch(`*[_type == "aboutGallery"][0]`);
    
    if (existingGallery) {
      console.log('📝 Updating existing About Gallery...');
      const result = await client
        .patch(existingGallery._id)
        .set(aboutGalleryData)
        .commit();
      console.log('✅ About Gallery updated successfully:', result._id);
    } else {
      console.log('📝 Creating new About Gallery document...');
      const result = await client.create(aboutGalleryData);
      console.log('✅ About Gallery created successfully:', result._id);
    }

    console.log('🎉 About Gallery seeding completed!');
  } catch (error) {
    console.error('❌ Error seeding About Gallery:', error);
    process.exit(1);
  }
}

// Helper function to upload images if they don't exist
async function uploadImageAssets() {
  console.log('🖼️ Checking image assets...');
  
  const imagePaths = [
    { file: 'indian-professional-man.png', ref: 'image-indian-professional-man-png' },
    { file: 'indian-woman-professional.png', ref: 'image-indian-woman-professional-png' },
    { file: 'indian-professor-man.jpg', ref: 'image-indian-professor-man-jpg' },
    { file: 'staff teaches to std.png', ref: 'image-staff-teaches-to-std-png' },
    { file: 'drone-flying-over-farm-field-at-sunset.jpg', ref: 'image-drone-flying-over-farm-field-at-sunset-jpg' },
    { file: 'dron in agri land.png', ref: 'image-dron-in-agri-land-png' }
  ];

  console.log('📸 Image assets are expected to be uploaded via Sanity Studio');
  console.log('📋 Required image files:');
  imagePaths.forEach(img => {
    console.log(`   - ${img.file} (ref: ${img.ref})`);
  });
  console.log('💡 Please upload these images in Sanity Studio and update the asset references accordingly.');
}

// Main execution function
async function main() {
  await uploadImageAssets();
  await seedAboutGallery();
}

// Run the seeding process
main();