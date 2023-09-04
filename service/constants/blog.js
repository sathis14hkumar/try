const getImage = (imageName) => {
    return require(`../../assets/images/blog/blogimages/${imageName}`)
}

export const blogList = [
    {
        uri: getImage("Fortified-Rice-Kernels.jpg"),
        title: "Toshniwal Mixer in Rice Fortification Process",
        date: "Feb, 21, 2023",
        desc: "The rice fortification process involves the addition of vital vitamins and minerals to the rice, which ultimately increases its nutritional value. The fortification process",
        by: "by Toshniwal Instruments (Madras) Pvt. Ltd."
    },
    {
        uri: getImage("OHT-tyres.jpg"),
        title: "Vacuum Pump in Tyre Manufacturing",
        desc: "Have you ever wondered Vacuum pumps play a crucial role in the Tyre manufacturing process..!! Yes, Tyre manufacturing involves the use of various",
        date: "Jan, 04, 2023",
        by: "by Toshniwal Vacuum Team"
    },
    {
        uri: getImage("Capture.jpeg"),
        title: "Compressed Air Application",
        desc: "Compressed air is so often used in Industrial facilities that it is often referred to as the “fourth” utility behind natural gas, electricity and water. The cost of compressed air on a unit per energy",
        date: "Dec, 23, 2022",
        by: "by Toshniwal Flow Team"
    },
    {
        uri: getImage("lubricant-oil.jpg"),
        title: "NEEDS AND NECESSITIES OF LUBRICANT OIL IN A",
        desc: "Topic based on Vacuum Oil",
        date: "Dec, 02, 2022",
        by: "by Toshniwal Vacuum Team"
    },
    {
        uri: getImage("Weka_Unterkategorie_Klein.png"),
        title: "VISUAL LEVEL INDICATOR",
        desc: "Our range of Visual Level Indicators are ideal for any level measuring and control application for clean liquids like diesel, petrol, water, ethanol and high viscous liquids over large indication ranges.",
        date: "Dec, 02, 2022",
        by: "by Toshniwal Flow Team"
    },
    {
        uri: getImage("butter.png"),
        title: "FLOW MEASUREMENT OF BUTTER OIL AT A DAIRY",
        desc: "Flow meters are used in a wide range of industries, be it pharmaceutical, power plants or food manufacturing units. To select a flow meter, the basic principle of a flow meter should be understood. Once",
        date: "Sep, 22, 2022",
        by: "by Toshniwal Flow Team"
    },
    {
        uri: getImage("WEB--sousvide_0.png"),
        title: 'VACUUM PUMP IN PACKAGING INDUSTRY',
        date: 'Feb, 04, 2022',
        description:
            'Vacuum pumps are used in a wide range of industries, be it pharmaceutical, power plants or food manufacturing units. To select a vacuum system, the principles of',
        by: "by Toshniwal Vacuum Team"
    },
];

export const recentPosts = [
    "Toshniwal Mixer in Rice Fortif...",
    "Vacuum Pump in Tyre Manufactur...",
    "Compressed Air Application",
    "NEEDS AND NECESSITIES OF LUBRI...",
    "VISUAL LEVEL INDICATOR"
]

export const archive = {
    2019: ["Jul", "Apr"],
    2018: ["May"],
    2022: ["Dec", "Sep", "Feb"],
    2023: ["Feb", "Jan"],
    2020: ["Nov", "May"]
}
