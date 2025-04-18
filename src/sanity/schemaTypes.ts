import { defineType, defineField } from 'sanity'

export const product = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string' }),
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
      name: 'specifications',
      title: 'Specifications',
      type: 'object',
      fields: [
        { name: 'weightCapacity', title: 'Weight Capacity', type: 'string' }, // 325 lbs
        { name: 'maxSpeed', title: 'Maximum Speed', type: 'string' }, // 4.7 mph
        { name: 'range', title: 'Per Charge Range (Max)', type: 'string' }, // 15.9 miles
        { name: 'climbingAngle', title: 'Climbing Angle', type: 'string' }, // n/a
        { name: 'groundClearance', title: 'Ground Clearance', type: 'string' }, // 0.75″ at anti-tip
        { name: 'turningRadius', title: 'Turning Radius', type: 'string' }, // 36″
        { name: 'frontWheelSize', title: 'Front Tire', type: 'string' }, // 3″ x 8″ solid
        { name: 'rearWheelSize', title: 'Rear Tires', type: 'string' }, // 3″ x 9″ solid
        { name: 'overallWidth', title: 'Width', type: 'string' }, // 21.25″
        { name: 'overallLength', title: 'Length', type: 'string' }, // 42″
        { name: 'seatWidth', title: 'Seating Width', type: 'string' }, // 17″
        { name: 'seatDepth', title: 'Seating Depth', type: 'string' }, // 17″
        { name: 'lowestSeatToGroundHeight', title: 'Seat-to-Ground Height (Min)', type: 'string' }, // 20.5″
        { name: 'maxSeatToGroundHeight', title: 'Seat-to-Ground Height (Max)', type: 'string' }, // 22″
        { name: 'maxSeatToDeckHeight', title: 'Seat-to-Deck Height (Max)', type: 'string' }, // 18″
        { name: 'weightWithoutBatteries', title: 'Total Weight Without Batteries', type: 'string' }, // 93 lbs.
        { name: 'heaviestPiece', title: 'Heaviest Piece', type: 'string' }, // 35 lbs.
        { name: 'seatSectionWeight', title: 'Seat Weight', type: 'string' }, // 16.5 lbs
        { name: 'batteryPackWeight', title: 'Battery Weight (each)', type: 'string' }, // 14 lbs. each
        { name: 'batteries', title: 'Battery Requirements', type: 'string' }, // 2 x 18AH
        { name: 'charger', title: 'Battery Charger', type: 'string' }, // 2A Offboard
        { name: 'suspension', title: 'Suspension', type: 'boolean' }, // No
        
    
        // Retaining your existing fields as well
        { name: 'scooterDisassembles', title: 'Scooter Disassembles', type: 'boolean' },
        { name: 'scooterDriveRange', title: 'Scooter Drive Range', type: 'string' },
        { name: 'deltaTiller', title: 'Delta Tiller', type: 'boolean' },
        { name: 'quickShip', title: 'Quick-Ship', type: 'boolean' },
        { name: 'adjustableTiller', title: 'Adjustable Tiller', type: 'boolean' },
        { name: 'multipleSeatingOptions', title: 'Multiple Seating Options', type: 'boolean' },
        { name: 'heightAdjustableSeat', title: 'Height Adjustable Seat', type: 'boolean' },
        { name: 'highBackSeat', title: 'High-Back Seat', type: 'boolean' },
        { name: 'flipBackArmrests', title: 'Flip-Back Armrests', type: 'boolean' },
        { name: 'widthAdjustable', title: 'Width Adjustable', type: 'boolean' },
        { name: 'wheelType', title: 'Wheel Type', type: 'string' },
        { name: 'airFilledTires', title: 'Air-Filled (Pneumatic) Tires', type: 'boolean' },
        { name: 'transportableCollapsible', title: 'Transportable/Collapsible', type: 'boolean' },
        { name: 'foldable', title: 'Foldable', type: 'boolean' },
        { name: 'batteryType', title: 'Battery Type', type: 'string' },
        { name: 'batteriesIncluded', title: 'Batteries Included', type: 'boolean' },
        { name: 'largerBatteryOption', title: 'Larger Battery Option', type: 'boolean' },
        { name: 'driveType', title: 'Drive Type', type: 'string' },
        { name: 'oneHandOperation', title: 'One-Hand Operation', type: 'boolean' },
        { name: 'brakingSystem', title: 'Braking System', type: 'string' },
        { name: 'basketIncluded', title: 'Basket Included', type: 'boolean' },
        { name: 'headlight', title: 'Headlight', type: 'boolean' },
        { name: 'extendedBase', title: 'Extended Base', type: 'boolean' },
        { name: 'baseAndTillerWeight', title: 'Base and Tiller Weight', type: 'string' },
        { name: 'chargingPortLocation', title: 'Charging Port Location', type: 'string' },
        
      ],
    }),
    
    defineField({
      name: 'productDetails',
      title: 'Product Details',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'armrestOptions',
      title: 'Armrest Options',
      type: 'array', 
      of: [{ type: 'string' }],
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
      name: 'scooterSpecifications',
      title: 'Scooter Specifications',
      type: 'document',
      fields: [
        {
          name: 'description',
          title: 'Specifications Description',
          type: 'array',
          of: [{ type: 'block' }],
        },
      ],
    }
    
    
),],
});