import { getGreeting } from "../shared/lib/utils/getGreeting";
import { Cont } from "../shared/ui/Cont";
import { PageHeader } from "../shared/ui/pageHeader/PageHeader";
import { MainStatsSection } from "../widgets/main/ui/MainStatsSection";
import { QuickActionsSection } from "../widgets/main/ui/QuickActionsSection";
import { RecentHistorySection } from "../widgets/main/ui/RecentHistorySection";
import { TutorialTasksSection } from "../widgets/main/ui/TutorialTasksSection";

export const MainPage = () => {
  return (
    <Cont className="py-10 space-y-10">
      <PageHeader
        title={`${getGreeting()}, Armat!`}
        subTitle="Here's what's happening with your tasks today."
      />

      <MainStatsSection />

      <div className="flex items-stretch justify-between gap-5">
        <QuickActionsSection />

        <TutorialTasksSection />
      </div>

      <RecentHistorySection />
    </Cont>
  );
};
