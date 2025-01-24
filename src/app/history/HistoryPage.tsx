import {
  ArrowDownUp,
  CircleCheckBig,
  Clock,
  Filter,
  Percent,
  Search,
} from "lucide-react";
import { Fragment } from "react/jsx-runtime";
import { HistoryItem } from "../../entities/history/ui/HistoryItem";
import { mockHistory } from "../../shared/temp/mockHistory";
import { Card } from "../../shared/ui/card/Card";
import { Cont } from "../../shared/ui/Cont";
import { PageHeader } from "../../shared/ui/PageHeader";
import { Divide } from "../../shared/ui/divide/Divide";
import { Button } from "../../shared/ui/button/Button";
import { Input } from "../../shared/ui/input/Input";

export const HistoryPage = () => {
  return (
    <Cont className="py-10 space-y-10">
      <PageHeader
        title="Task History"
        subTitle="View and analyze your completed tasks"
      />

      <div className="flex items-center justify-between gap-5">
        <Card className="w-full flex flex-col justify-between gap-2 hover:scale-[102%] transition-all">
          <div className="flex items-center justify-between text-sm font-medium">
            <h3>Total Completed</h3>
            <CircleCheckBig size={16} className="text-typo-secondary" />
          </div>
          <div className="text-2xl font-semibold">245 tasks</div>
          <div className="text-xs text-typo-secondary flex items-center gap-1">
            <span className="text-green-500">+49</span>
            <div>from last month</div>
          </div>
        </Card>

        <Card className="w-full flex flex-col justify-between gap-2 hover:scale-[102%] transition-all">
          <div className="flex items-center justify-between text-sm font-medium">
            <h3>Completion Rate</h3>
            <Percent size={16} className="text-typo-secondary" />
          </div>
          <div className="text-2xl font-semibold">87%</div>
          <div className="text-xs text-typo-secondary flex items-center gap-1">
            <span className="text-green-500">+5%</span>
            <div>from last month</div>
          </div>
        </Card>

        <Card className="w-full flex flex-col justify-between gap-2 hover:scale-[102%] transition-all">
          <div className="flex items-center justify-between text-sm font-medium">
            <h3>Average Time</h3>
            <Clock size={16} className="text-typo-secondary" />
          </div>
          <div className="text-2xl font-semibold">2.5 days</div>
          <div className="text-xs text-typo-secondary flex items-center gap-1">
            Per task completion
          </div>
        </Card>
      </div>

      <div className="flex items-center justify-between gap-5">
        <div className="relative">
          <Search
            size={20}
            className="stroke-typo-secondary absolute top-1/2 left-3 -translate-y-1/2"
          />
          <Input placeholder="Search..." className="px-10" />
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline">
            <ArrowDownUp />
            Sort
          </Button>
          <Button variant="outline">
            <Filter />
            Filter
          </Button>
        </div>
      </div>

      <Card className="flex flex-col gap-3">
        {mockHistory.map((item, index) => (
          <Fragment key={item.id}>
            <HistoryItem {...item} />
            {mockHistory.length !== index + 1 && <Divide />}
          </Fragment>
        ))}
      </Card>
    </Cont>
  );
};
