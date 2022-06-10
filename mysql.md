# 一、DDL操作表

## 1、DDL - 操作表

- ### 查询当前数据库中的所有表名称	

  ```sql
  SHOW TABLE;
  ```

  

- 查询表结构

```sql
DESC 表名称
```



- 创建表

注意：最后一行末尾，不能加逗号

```
CREATE TABLE 表名（
			字段1	数据类型1，
			字段2 数据类型2,
			...
			字段n 数据类型n
);
```



- 删除表

```sql
1、直接删除表
DROP TABLE 表名;

2、删除表时判断表是否存在
DROP TABLE IF EXISTS 表名;
```

- 修改表

```sql
1、修改表名
ALTAER TABLE 表名 RENAME TO 新的表名;

2、添加一列
ALTER TABLE 表名 ADD 列名 数据类型;

3、修改数据类型
ALTER TABLE 表名 MODIFY 列名 新数据类型;

4、修改列名和数据类型
ALTER TABLE 表名 CHANGE 列名 新的列名 新的数据类型;

5、删除列
ALTER TABLE 表名 DROP 列名;
```



## 2、DML - 操作数据 

- 添加数据

```sql
1、给定列的添加数据
INSERT INTO 表名（列名1,列名2,...）VALUES(值1,值2,...);

2、给全部的列添加数据
INSERT INTO 表名 VALUES(值1，值2，...);

3、批量添加数据
INSERT INTO 表名(列名1,列名2,...) VALUES(值1,值2,...),(值1,值2,...),(值1,值2,...)...;
INSERT INTO 表名 VALUES(值1,值2,...),(值1,值2,...),(值1,值2,...)...;
```

- 修改数据

​	注意：修改语句中如果不加条件，则将所有数据都修改

```
UPDATE 表名 SET 列名1=值1,列名2=值2,...[WHERE 条件];
```

- 删除数据

​	注意：删除语句中如果不加条件，则将所有数据都删除

```
DELETE FROM 表名 [WHRER 条件];
```

## 3、DQL - 基础查询

### 3.1、查询语法

```
SELECT
	字段列表
FORM
	表名列表
WHERE
	条件列表
GROUP BY
	分组字段
HAVING
	分组后条件
ORDER BY
	排序字段
LIMIT
	分页限定
```

### 3.2、基础查询

```
1、查询多个字段
SELECT 字段列表 FROM 表名;
SELECT * FROM; --查询所有数据

2、去除重复记录
SELECT DISTINCT 字段列表 FROM 表名

3、起别名
AS: AS 也可以省略
```

### 3.2、条件查询

```
1、条件查询语法
SELECT 字段列表 FROM 表名 WHERE 条件列表

2、条件查询
	>					大于
	<					小于
	>=					大于等于
	<=					小于等于
	=					等于
	<>或!=	   		   不等于
	BETWEEN...AND		在某个范围之内(都包含)
	IN(...)				多选一
	LINK占位符			  模糊查询_单个任意字符 %多个任意字符
	IS NULL				是NULL
	IS NOT NULL			不是NULL
	AND或&&				并且
	OR或||				或者
	NOT或				非，不是
```

### 3.3、排序查询

```
1、排序查询语法
注意：如果有多个排序条件，当前边的条件值一样时，才会根据条件二进行排序

SELECT 字段列表 FORM 表名 ORDER BY 排序字段名1 [排序方式1]，排序字段2 [排序方法2],...;

排序方式：
ASC:升序排列（默认）
DESC：降序排序
```

### 3.4、分组查询

#### 3.4.1、聚合函数

1、 概念：将一列数据作为一个整体，进行纵向计算

2、聚合函数分类

- count(列名)	统计数量(一般选用不为null的列)
- max(列名)      最大值
- min(列名)       最小值
- sum(列名)     求和
- avg(列名)       平均

3、聚合函数语法

```
SEKECT 聚合函数名(列名) FROM 表名

注意：null值不参与所有聚合函数运算
```

#### 3.4.2、分组查询

```
1、分组查询语法
SELECT 字段列表 FROM 表名 [WHERE 分组前条件限定] GROUP BY 分组字段名 [HAVING 分组后条件过滤]；

注意：分组之后，查询的字段为聚合函数和分组字段，查询其他字段无任何意义

where和having区别：
执行时机不一样：where是分组之前进行限定，不满足where条件，则不参与分组，而having是分组之后对结果进行过滤
可判断的条件不一样：where不能对聚合函数进行判断，having可以

执行顺序：where > 聚合函数 > having
```

