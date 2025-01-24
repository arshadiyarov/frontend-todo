import { Fragment } from "react/jsx-runtime";
import { mockHistory } from "../../../shared/temp/mockHistory";
import { HistoryItem } from "../../../entities/history/ui/HistoryItem";
import { Divide } from "../../../shared/ui/divide/Divide";
import { Card } from "../../../shared/ui/card/Card";
import { CardHeader } from "../../../shared/ui/card/ui/CardHeader";
import { Button } from "../../../shared/ui/button/Button";
import { Link } from "react-router";
import { MoveRight } from "lucide-react";

export const RecentHistorySection = () => {
  return (
    <Card className="flex flex-col gap-5 w-full">
      <div className="flex items-center justify-between">
        <CardHeader
          title="Recent Activity"
          subTitle="Your latest actions and updates"
        />
        <Button variant="link" asChild>
          <Link to="/history" className="group">
            View History
            <MoveRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </div>
      <div className="flex flex-col gap-3">
        {mockHistory.map((item, index) => (
          <Fragment key={item.id}>
            <HistoryItem {...item} />
            {mockHistory.length !== index + 1 && <Divide />}
          </Fragment>
        ))}
      </div>
    </Card>
  );
};
