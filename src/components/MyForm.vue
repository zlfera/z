<template>
  <el-dialog v-model="dialogFormVisible" width="80%" title="Shipping address">
    <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" class="demo-ruleForm" status-icon>
      <el-row>
        <el-col :span="11">
          <el-form-item label="供应商名称" prop="supplierName">
            <el-input v-model="ruleForm.supplierName" />
          </el-form-item>
        </el-col>
        <el-col :span="2"></el-col>
        <el-col :span="11">
          <el-form-item label="供应商名称" prop="supplierName">
            <el-input v-model="ruleForm.supplierName" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="11">
          <el-form-item label="供应商名称" prop="supplierName">
            <el-input v-model="ruleForm.supplierName" />
          </el-form-item>
        </el-col>
        <el-col :span="2"></el-col>
        <el-col :span="11">
          <el-form-item label="供应商名称" prop="supplierName">
            <el-input v-model="ruleForm.supplierName" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="11">
          <el-form-item label="供应商名称" prop="supplierName">
            <el-input v-model="ruleForm.supplierName" />
          </el-form-item>
        </el-col>
        <el-col :span="2"></el-col>
        <el-col :span="11">
          <el-form-item label="供应商名称" prop="supplierName">
            <el-input v-model="ruleForm.supplierName" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-form-item label="供应商名称" prop="supplierName">
            <el-input v-model="ruleForm.supplierName" />
          </el-form-item>
        </el-col>
      </el-row>

      <el-form-item class="center">
        <el-button type="primary" @click="onSubmit">Create</el-button>
        <el-button>Cancel</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import type { FormInstance, FormRules } from "element-plus";
import { inject } from "vue";
const dialogFormVisible = inject("dialogFormVisible");
const ruleFormRef = ref<FormInstance>();
const ruleForm = reactive({
  supplierName: "Hello",
  supplierClassification: "",
  phone: "",
  address: "",
  supplierStatus: "",
  remarks: "",
});

const rules = reactive<FormRules>({
  supplierName: [
    { required: true, message: "Please input Activity name", trigger: "blur" },
    { min: 3, max: 5, message: "Length should be 3 to 5", trigger: "blur" },
  ],
  supplierClassification: [
    {
      required: true,
      message: "Please select Activity zone",
      trigger: "change",
    },
  ],
  phone: [
    {
      required: true,
      message: "Please select Activity count",
      trigger: "change",
    },
  ],
  address: [
    {
      required: true,
      message: "Please pick a date",
      trigger: "change",
    },
  ],
  supplierStatus: [
    {
      required: true,
      message: "Please pick a time",
      trigger: "change",
    },
  ],
  remarks: [
    {
      required: true,
      message: "Please select at least one activity type",
      trigger: "change",
    },
  ],
});

const onSubmit = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log("submit!");
    } else {
      console.log("error submit!", fields);
    }
  });
};
</script>
<style scoped>
.center {
  justify-items: center;
  justify-content: center;
  text-align: center;
}

.el-button--text {
  margin-right: 15px;
}

.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
