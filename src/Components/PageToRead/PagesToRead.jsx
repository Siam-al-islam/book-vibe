import { Bar, BarChart, Cell, ResponsiveContainer, XAxis, YAxis } from "recharts";
import booksData from '../../data/books.json'

const PagesToRead = () => {
    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };


    return (
        <div className="mt-12 max-w-[1000px] mx-auto">
            <ResponsiveContainer width="100%" height={500}>
                <BarChart data={booksData} >
                    {/* <Bar dataKey={"name"}></Bar> */}
                    <XAxis dataKey={"bookName"} />
                    <YAxis />
                    <Bar dataKey={"totalPages"} shape={<TriangleBar />}>
                        {booksData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default PagesToRead;