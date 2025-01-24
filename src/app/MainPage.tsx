import {
  ArrowRight,
  CircleCheck,
  ListTodo,
  MoveRight,
  Plus,
  Star,
  Trophy,
} from "lucide-react";
import { getGreeting } from "../shared/lib/utils/getGreeting";
import { Card } from "../shared/ui/card/Card";
import { Cont } from "../shared/ui/Cont";
import { cn } from "../shared/lib/utils/cn";
import { Fragment, useEffect, useState } from "react";
import { Button } from "../shared/ui/button/Button";
import { Link } from "react-router";
import { PageHeader } from "../shared/ui/PageHeader";
import { Divide } from "../shared/ui/divide/Divide";
import { InfoCard } from "../entities/info/ui/InfoCard";
import { mockHistory } from "../shared/temp/mockHistory";
import { HistoryItem } from "../entities/history/ui/HistoryItem";
import { BgCircle } from "../shared/ui/BgCircle";
// TODO: Divide into widgets
export const MainPage = () => {
  // TODO: Get tasks from api, and change bar width calculation logic
  const [barWidth, setBarWidth] = useState(0);

  // TODO: Refactor
  useEffect(() => {
    setTimeout(() => {
      setBarWidth(80);
    }, 300);
  }, []);

  return (
    <Cont className="py-10 space-y-10">
      <PageHeader
        title={`${getGreeting()}, {username}!`}
        subTitle="Here's what's happening with your tasks today."
      />

      <div className="flex flex-col lg:flex-row items-stretch justify-between gap-5">
        <Card className="w-full flex flex-col justify-between gap-2 hover:scale-[102%] transition-all">
          <div className="flex items-center justify-between text-sm font-medium">
            <h3>Tasks Completed</h3>
            <CircleCheck size={16} className="text-typo-secondary" />
          </div>
          <div className="space-y-3">
            <div className="text-2xl font-semibold">12/15</div>
            <div className="flex relative">
              <div
                // TODO: Refactor
                style={{ width: `${barWidth}%` }}
                className={cn(
                  "relative z-10 bg-primary h-4 rounded-l-xl transition-all duration-300"
                )}
              />
              <div
                className={cn(
                  "absolute bg-neutral-100 h-4 rounded-xl w-full transition-all duration-300"
                )}
              />
            </div>
          </div>
          <div className="text-xs text-typo-secondary">
            {/* TODO: Refactor */}
            {barWidth}% completion rate this week
          </div>
        </Card>

        <InfoCard
          title="Current Streak"
          body="5 days"
          footer="Keep it up! You're doing great"
          icon={<Trophy size={16} className="text-typo-secondary" />}
        />

        <InfoCard
          title="Current Streak"
          body="5 days"
          footer="Keep it up! You're doing great"
          icon={<Trophy size={16} className="text-typo-secondary" />}
        />

        <Card className="w-full flex flex-col justify-between gap-2 hover:scale-[102%] transition-all">
          <div className="flex items-center justify-between text-sm font-medium">
            <h3>Priority Tasks</h3>
            <Star size={16} className="text-typo-secondary" />
          </div>
          <div className="text-2xl font-semibold">3 tasks</div>
          <div className="text-xs text-typo-secondary">
            Due within the next 24 hours
          </div>
        </Card>
      </div>

      <div className="flex items-stretch justify-between gap-5">
        <Card className="flex flex-col gap-5 w-full">
          <div>
            <h2 className="text-2xl font-medium">Quick Actions</h2>
            <div className="text-sm text-typo-secondary">
              Get started with these common tasks
            </div>
          </div>
          <div className="w-full flex flex-col gap-3">
            <Button variant="outline" className="justify-start">
              <Plus />
              Create new task
            </Button>
            <Button variant="outline" className="justify-start" asChild>
              <Link to="/tasks">
                <ListTodo />
                View all tasks
              </Link>
            </Button>
          </div>
        </Card>

        <Card className="flex flex-col gap-5 w-full">
          <div>
            <h2 className="text-2xl font-medium">Getting Started</h2>
            <div className="text-sm text-typo-secondary">
              Complete these steps to get the most out of the app
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <Button
              variant="ghost"
              className="w-full flex items-center justify-between gap-3 p-3 h-12 group"
            >
              <div className="flex items-center gap-3">
                <BgCircle
                  className={cn("bg-gray-100", {
                    "bg-green-100": true,
                  })}
                >
                  <CircleCheck
                    className={cn("transition-colors text-gray-400", {
                      "text-green-500": true,
                    })}
                  />
                </BgCircle>
                <div className="flex flex-col items-start">
                  <div className="text-sm">Create your first task</div>
                  <div className="text-sm text-typo-secondary">
                    Add something to your todo list
                  </div>
                </div>
              </div>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Button>

            <Divide />

            <Button
              variant="ghost"
              className="w-full flex items-center justify-between gap-3 p-3 h-12 group"
            >
              <div className="flex items-center gap-3">
                <BgCircle
                  className={cn("bg-gray-100", {
                    "bg-green-100": false,
                  })}
                >
                  <CircleCheck
                    className={cn("text-gray-400", {
                      "text-green-500": false,
                    })}
                  />
                </BgCircle>
                <div className="flex flex-col items-start">
                  <div className="text-sm">Set up notifications</div>
                  <div className="text-sm text-typo-secondary">
                    Never miss a deadline
                  </div>
                </div>
              </div>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Button>

            <Divide />

            <Button
              variant="ghost"
              className="w-full flex items-center justify-between gap-3 p-3 h-12 group"
            >
              <div className="flex items-center gap-3">
                <BgCircle
                  className={cn("transition-colors bg-gray-100", {
                    "bg-green-100": false,
                  })}
                >
                  <CircleCheck
                    className={cn("transition-colors text-gray-400", {
                      "text-green-500": false,
                    })}
                  />
                </BgCircle>
                <div className="flex flex-col items-start">
                  <div className="text-sm">Invite team members</div>
                  <div className="text-sm text-typo-secondary">
                    Collaborate with others
                  </div>
                </div>
              </div>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </Card>
      </div>

      <Card className="flex flex-col gap-5 w-full">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-medium">Recent Activity</h2>
            <div className="text-sm text-typo-secondary">
              Your latest actions and updates
            </div>
          </div>
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
    </Cont>
  );
};
