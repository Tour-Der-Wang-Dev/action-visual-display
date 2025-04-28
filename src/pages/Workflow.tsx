
import { useQuery } from '@tanstack/react-query';
import WorkflowItem from '@/components/WorkflowItem/WorkflowItem';
import { fetchWorkflowItems } from '@/services/github';
import { Card } from '@/components/ui/card';

const Workflow = () => {
  const { data: workflowRuns, isLoading, error } = useQuery({
    queryKey: ['workflows'],
    queryFn: () => fetchWorkflowItems('your-username', 'your-repo'),
  });

  if (isLoading) {
    return <div className="flex justify-center p-8">Loading workflows...</div>;
  }

  if (error) {
    return <div className="text-red-500 p-8">Error loading workflows</div>;
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Workflow Status</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {workflowRuns?.map((run) => (
          <WorkflowItem
            key={run.id}
            title={run.name}
            status={run.status}
            dueDate={run.updated_at}
            interactive={true}
          />
        ))}
      </div>
    </div>
  );
};

export default Workflow;
