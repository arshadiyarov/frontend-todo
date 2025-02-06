import { api } from "../../../shared/api/api";
import { DefaultRes } from "../../../shared/api/model/api";
import {
  CreateTaskReq,
  DeleteTaskReq,
  StatusType,
  TaskEntity,
  UpdateTaskReq,
} from "../model/task";

class TaskService {
  async getAll({
    status = "",
    search = "",
  }: {
    status?: StatusType | "";
    search?: string;
  }) {
    const res = await api.get<TaskEntity[]>(
      `/tasks?search=${search}&status=${status}`
    );

    return res;
  }

  async create(req: CreateTaskReq) {
    const { ...body } = req;

    const res = await api.post<TaskEntity>("/tasks", body);

    return res;
  }

  async update(req: UpdateTaskReq) {
    const { id, ...body } = req;

    const res = await api.patch<TaskEntity>(`/tasks/${id}`, body);

    return res;
  }

  async delete(req: DeleteTaskReq) {
    const { id } = req;

    const res = await api.delete<DefaultRes>(`/tasks/${id}`);

    return res;
  }
}

export const taskService = new TaskService();
