import { Link } from "react-router-dom";
import "./chartBox.scss";
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";

type ChartBoxProps = {
   color: string;
   icon: string;
   title: string;
   dataKey: string;
   number: number | string;
   percentage: number;
   chartData: object[];
};

const ChartBox = (props: ChartBoxProps) => {
   return (
      <div className="chart-box">
         <div className="box-info">
            <div className="title">
               <img src={props.icon} alt="userInfo" />
               <span>{props.title}</span>
            </div>
            <h1>{props.number}</h1>
            <Link to="/" style={{ color: props.color }}>
               View All
            </Link>
         </div>
         <div className="chart-info">
            <div className="chart">
               <ResponsiveContainer width="99%" height="100%">
                  <LineChart data={props.chartData}>
                     <Tooltip
                        contentStyle={{ background: "transparent", border: "none" }}
                        labelStyle={{ display: "none" }}
                        position={{ x: -7, y: 50 }}
                     />
                     <Line
                        type="monotone"
                        dataKey={props.dataKey}
                        stroke={props.color}
                        strokeWidth={2}
                        dot={false}
                     />
                  </LineChart>
               </ResponsiveContainer>
            </div>
            <div className="info">
               <span
                  className="percentage"
                  style={{ color: props.percentage < 0 ? "tomato" : "limegreen" }}
               >
                  {props.percentage}
               </span>
               <span className="duration">Since last month</span>
            </div>
         </div>
      </div>
   );
};
export default ChartBox;
