## 修改计划

### 1. 分析当前问题

* 当前生成的API方法返回`Promise<CodeResultType>`，包含`code`、`message`和`data`字段

* 用户在`send`方法中已统一处理`code`和`message`字段，只需要返回`data`字段

* 生成的模型中包含大量CodeResult类型，结构一致但类型名称不同

### 2. 修改目标

* **模型生成**：不再生成CodeResult类型及其泛型类型

* **API返回类型**：直接返回CodeResult中的`data`字段类型

* **无data字段情况**：返回`Promise`对象而非`Promise<void>`

### 3. 具体修改步骤

#### 3.1 修改模板文件

##### 3.1.1 修改`apiInner.mustache`模板

* **修改返回类型逻辑**：在第25行修改方法签名，将`Promise<{{{returnType}}}{{^returnType}}void{{/returnType}}>`改为：

  * 当`returnType`包含`CodeResult`时，提取其`data`字段类型

  * 例如：`Promise<BooleanCodeResult>` → `Promise<Boolean>`

  * 无返回类型时返回`Promise<any>`而非`Promise<void>`

* **保持URL生成逻辑不变**：用户表示不需要处理path参数问题

##### 3.1.2 修改`model.mustache`模板

* **跳过CodeResult类型生成**：添加条件判断，跳过所有包含`CodeResult`的模型生成

* **修改模型导入**：更新导入语句，移除对CodeResult类型的引用

#### 3.2 测试修改效果

* 运行`npm run generate:client`生成代码

* 检查生成的API方法返回类型是否直接为data字段类型

* 检查生成的模型中是否不再包含CodeResult类型

* 检查无返回类型的方法是否返回`Promise`而非`Promise<void>`

### 4. 预期效果

* API方法直接返回data字段类型，例如：

  ```typescript
  public operationauditIdDelete(id: string): Promise<boolean> {
      return send({
          url: `/operationaudit/{id}`,
          method: 'DELETE',
      });
  }
  ```

* 模型目录中不再包含`*CodeResult.ts`文件

* 无返回类型的方法返回`Promise<any>`而非`Promise<void>`

### 5. 实施步骤

1. 首先修改`model.mustache`模板，跳过CodeResult类型生成
2. 然后修改`apiInner.mustache`模板，调整返回类型逻辑
3. 运行生成命令测试效果
4. 检查生成的代码是否符合要求
5. 如有问题，调整模板并重新测试

### 6. 验证标准

* 生成的API方法返回类型直接为data字段类型

* 模型目录中无CodeResult类型文件

* 无返回类型的方法返回`Promise<any>`

