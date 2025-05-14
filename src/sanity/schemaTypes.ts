import { defineType, defineField } from 'sanity'

export const product = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({
      name: 'introDescription',
      title: 'Intro Description',
      type: 'text',
      initialValue:
        'Delta™ Ultra-Light 1000, Full-Electric Hospital Bed by Drive Medical\n\nIncludes: Bed Frame Only\nPlease select the following below:\n• Mattress\n• Choice of Full or Half Rails\n• Accessories',
    }),
    
    defineField({ name: 'description', title: 'Product Description', type: 'text' }), 
    defineField({ name: 'whyWeLikeIt', title: 'Why We Like It', type: 'text' }), 
    defineField({ name: 'productDetailsDescription', title: 'Product Details Description', type: 'text' }),
    defineField({ name: 'price', title: 'Price', type: 'number' }),
    defineField({ name: 'stock', title: 'Stock', type: 'number' }),
    defineField({
      name: 'availability',
      title: 'Availability',
      type: 'string',
      options: {
        list: [
          { title: 'In Stock', value: 'in_stock' },
          { title: 'Out of Stock', value: 'out_of_stock' },
          { title: 'Call for Availability', value: 'call' },
        ],
      },
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'additionalImages',
      title: 'Additional Images',
      type: 'array',
      of: [
        defineField({
          name: 'image',
          title: 'Additional Image',
          type: 'image',
          options: { hotspot: true },
        }),
      ],
    }),

    defineField({
      name: 'productDetails',
      title: 'Product Details',
      type: 'array',
      of: [{ type: 'block' }],
    }),
   
    defineField({
      name: 'sectionImages',
      title: 'Section Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
        },
      ],
      // You can specify a limit for the array to only allow 2 images
      validation: (Rule) => Rule.length(2).error('Please upload exactly two images.'),
    }),




defineField({
  name: 'featuresList',
  title: 'Product Features',
  type: 'array',
  of: [{ type: 'string' }],
  initialValue: [
    'The Delta 1000 is truly universal because the bed frame can be used with Drive’s and most other manufacturers’ bed ends, old and new',
    'The transition box mounted on the foot section is key to interchangeability',
    'The transition box allows you to change the rotation of the high/low shaft',
    'Headboard is taller than footboard to better fit home decor',
    'The wood grain panels are break and scratch resistant',
    'Foot section weighs 50% less than conventional foot sections to make deliveries safe and easy',
    'Once installed, the high/low shaft will stay with the bed to eliminate loss or forgetting on future installations',
    'Labels and color-coded springs assure accurate installation of side rails for patient safety',
    'Unique motor is completely self-contained to reduce weight and noise',
    'The motor assembly can be installed and removed with patient in bed',
    'Bed, side rails and mattress safety-tested by SGS, a nationally recognized testing facility. Satisfies all applicable FDA entrapment guidelines',
    'The motor is UL approved',
    'In the event of a power failure, a 9 volt battery in the hand control can lower the head and foot sections nine times — no crank needed',
    'New and improved hand pendant has large, easy-to-use controls',
    'Bed ships in two cartons',
    'Channel frame construction provides superior strength and reduced weight',
    'Zinc-coated spring deck',
    'Weight Capacity 450 lbs',
  ],
}),

defineField({ name: 'brand', title: 'Brand', type: 'string', initialValue: 'Drive DeVilbiss Healthcare' }),
defineField({ name: 'sku', title: 'SKU', type: 'string', initialValue: '700-850' }),
defineField({ name: 'originalPrice', title: 'Original Price', type: 'number', initialValue: 425 }),


],

});