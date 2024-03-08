declare namespace API {
  /**
   * 内容中心模块
   */
  namespace Content {
    // 帮助内容
    type Help = Common.CommonRecord<{
      title: string;
      category_id: number;
      abstract: string;
      content: string;
    }>;
    // 帮助列表
    type HelpList = Common.PaginatingQueryRecord<Help>;
    // 帮助内容查询参数
    type HelpSearchParams = Partial<Pick<Help, "title"> & Common.CommonSearchParams>;
    // 帮助分类
    type HelpCategory = Common.CommonRecord<{
      category_name: string;
      description: string;
      status: number;
      sort: number;
    }>;

    // 更新日志
    type ChangeLog = Common.CommonRecord<{
      title: string;
      content: string;
      type: number;
      changed_at: string;
    }>;
    // 更新日志列表
    type ChangeLogList = Common.PaginatingQueryRecord<ChangeLog>;
    // 更新日志查询参数
    type ChangeLogSearchParams = Partial<Pick<ChangeLog, "title"> & Common.CommonSearchParams>;

    // 反馈信息
    type Feedback = Common.CommonRecord<{
      feedback_info: string;
      images: string | string[];
      mobile: string;
    }>;
  }
}
