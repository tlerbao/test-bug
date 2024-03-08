declare namespace API {
  export namespace Permissions {
    /** 角色 */
    type Role = Common.CommonRecord<{
      role_name: string;
      identify: string;
      parent_id: number;
      description: string;
      data_range: number;
      _permissions: number[];
      departments: any[];
    }>;
    type RoleSearchParams = Common.CommonSearchParams & Pick<Role, "role_name">;

    /** 用户 */
    type User = Common.CommonRecord<{
      username: string;
      mobile: string;
      fullname: string;
      email: string;
      avatar: string;
      birthday?: any;
      department_id: number;
      status: number;
      last_login_ip: string;
      last_login_time: string;
      wework_userid: string;
      wechat_userid: string;
    }>;
    type UserSearchParams = Common.CommonSearchParams & Pick<User, "fullname">;
    type UserList = Common.PaginatingQueryRecord<User>;

    /** 部门 */
    type Department = Common.CommonRecord<{
      id: number;
      department_name: string;
      parent_id: number;
      principal: string;
      mobile: string;
      email: string;
      creator_id: number;
      status: number;
      sort: number;
      is_shop: number;
      brand_id: number;
      brand_name?: any;
      children: Department[];
    }>;

    /** 岗位 */
    type Job = Common.CommonRecord<{
      job_name: string;
      coding: string;
      status: number;
      sort: number;
      description: string;
    }>;
    type JobSearchParams = Common.CommonSearchParams & Pick<Job, "job_name" | "coding" | "status">;
    type JobList = Common.PaginatingQueryRecord<Job>;

    /** 权限 & 菜单 */
    type Rule = Common.CommonRecord<{
      permission_name: string;
      permission_shortname: string;
      parent_id: number;
      level: string;
      route: string;
      icon: string;
      module: string;
      permission_mark: string;
      component: string;
      redirect: string;
      active_menu: string;
      type: number;
      is_link: number;
      is_full: number;
      is_hidden: number;
      is_affix: number;
      is_keepalive: number;
      sort: number;
      actionList: any[];
      children: Rule[];
    }>;
    type RuleSearchParams = Common.CommonSearchParams & Pick<Rule, "permission_name">;

    /** 品牌 */
    type Brand = Common.CommonRecord<{
      brand_name: string;
      logo: string;
      sort: number;
      status: number;
      description: string;
      creator: string;
      store_count: number;
    }>;
    type BrandSearchParams = Partial<Common.CommonSearchParams & Pick<Brand, "brand_name">>;
    type BrandList = Common.PaginatingQueryRecord<Brand>;

    /** 团队 */
    type TeamList = User & { departments: Department[] } & { jobs: Job[] };
  }
}
