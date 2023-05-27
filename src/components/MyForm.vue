<template>
  <el-dialog v-model="dialogFormVisible" title="Shipping address">
    <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" class="demo-ruleForm" :size="formSize" status-icon>
      <el-form-item label="供应商名称" prop="supplierName">
        <el-input v-model="ruleForm.supplierName" />
      </el-form-item>

      <el-form-item label="供应商电话" required>
        <el-col :span="11">
          <el-form-item prop="phone">
            <el-input v-model="ruleForm.phone" label="电话" />
          </el-form-item>
        </el-col>
      </el-form-item>

      <el-col class="text-center" :span="2">
        <span class="text-gray-500">-</span>
      </el-col>
      <el-form-item>
        <el-col :span="11">
          <el-form-item prop="address">
            <el-input v-model="ruleForm.address" label="地址" style="width: 100%" />
          </el-form-item>
        </el-col>
      </el-form-item>


      <el-form-item>
        <el-button type="primary" @click="submitForm(ruleFormRef)">
          Create
        </el-button>
        <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">
          Confirm
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import type { FormInstance, FormRules } from "element-plus";
import { inject } from "vue";
const dialogFormVisible = inject("dialogFormVisible");
const formSize = ref("default");
const ruleFormRef = ref<FormInstance>();
const ruleForm = reactive({
  supplierName: "Hello",
  supplierClassification: "",
  phone: "",
  address: "",
  supplierStatus: "",
  remarks: '',

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
  ]
});

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log("submit!");
    } else {
      console.log("error submit!", fields);
    }
  });
};

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};

const options = Array.from({ length: 10000 }).map((_, idx) => ({
  value: `${idx + 1}`,
  label: `${idx + 1}`,
}));
</script>
<style>
.el-button--text {
  margin-right: 15px;
}

.el-select {
  width: 300px;
}

.el-input {
  width: 300px;
}

.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
