<template>
  <v-dialog v-model="createProductDialog" persistent width="900px">
    <v-container grid-list-xs style="padding: 0;">
      <v-card outlined style="border-radius: 12px;">
        <v-toolbar dense flat color="amber">
          <p class="mt-3">Create Product</p>
          <v-spacer />
          <v-btn icon>
            <v-icon>more_vert</v-icon>
          </v-btn>
        </v-toolbar>
        <v-divider></v-divider>

        <v-img :src="image" id="rounded-card">
          <v-btn
            :ripple="false"
            icon
            fab
            color="pink"
            id="no-background-hover"
            style="postion: absolute; left: 22%; top: 20%;"
            @click="$refs.fileInput1.click()"
          >
            <v-icon color="green">mdi-camera</v-icon>
          </v-btn>
        </v-img>

        <h3 style="margin-left: 50px;">Product details</h3>
        <!-- <v-divider style="width: 50%;"></v-divider> -->
        <br />
        <input
          type="file"
          style="display: none;"
          @change="onProductFileSelected"
          ref="fileInput1"
        />
        <br />

        <v-form @submit.prevent="save" ref="form" lazy-validation>
          <v-layout row>
            <v-flex class="ml-4 mt-4" xs12 sm12 md12 lg12>
              <v-layout row>
                <v-flex class="mr-2" xs12 sm12 md3 lg3>
                  <v-text-field
                    dense
                    :label="$t('productCode')"
                    v-model="item.productCode"
                    outlined
                    :rules="inputRule"
                  ></v-text-field>
                </v-flex>

                <v-flex class="mr-2" xs12 sm12 md4 lg4>
                  <v-text-field
                    dense
                    :label="$t('productName')"
                    v-model="item.productName"
                    outlined
                    :rules="inputRule"
                  ></v-text-field>
                </v-flex>

                <v-flex class="mr-2" xs12 sm12 md2 lg2>
                  <v-text-field
                    dense
                    :label="$t('weightPerUnit')"
                    v-model="item.weightPerUnit"
                    outlined
                    type="number"
                    :rules="inputRule"
                  ></v-text-field>
                </v-flex>

                <v-flex class="mr-2" xs12 sm12 md2 lg2>
                  <v-text-field
                    dense
                    :label="$t('stock')"
                    v-model="item.stock"
                    outlined
                    type="number"
                    :rules="inputRule"
                  ></v-text-field>
                </v-flex>
              </v-layout>
            </v-flex>

            <v-flex class="ml-4" xs12 sm12 md12 lg12>
              <v-layout row>
                <v-flex class="mr-2" xs12 sm12 md3 lg3>
                  <v-text-field
                    dense
                    :label="$t('safetyStock')"
                    v-model="item.safetyStock"
                    outlined
                    type="number"
                    :rules="inputRule"
                  ></v-text-field>
                </v-flex>

                <v-flex class="mr-2" xs12 sm12 md3 lg3>
                  <v-text-field
                    dense
                    :label="$t('brand')"
                    v-model="item.brand"
                    outlined
                    :rules="inputRule"
                  ></v-text-field>
                </v-flex>

                <v-flex class="mr-2" xs12 sm12 md3 lg3>
                  <v-text-field
                    dense
                    :label="$t('standardSellingRate')"
                    v-model="item.standardSellingRate"
                    outlined
                    :rules="inputRule"
                  ></v-text-field>
                </v-flex>

                <v-flex class="mr-2" xs12 sm12 md2 lg2>
                  <v-text-field
                    dense
                    :label="$t('minimumOrderQt')"
                    v-model="item.minimumOrderQt"
                    outlined
                    type="number"
                    :rules="inputRule"
                  ></v-text-field>
                </v-flex>
              </v-layout>
            </v-flex>

            <v-flex class="ml-4" xs12 sm12 md12 lg12>
              <v-layout row>
                <v-flex class="mr-2" xs12 sm12 md7 lg7>
                  <v-text-field
                    dense
                    :label="$t('description')"
                    v-model="item.description"
                    outlined
                    :rules="inputRule"
                  ></v-text-field>
                </v-flex>

                <v-flex class="mr-3" xs12 sm12 md4 lg4>
                  <v-text-field
                    dense
                    :label="$t('unitOfMeasure')"
                    v-model="item.unitofMeasure"
                    outlined
                    :rules="inputRule"
                  ></v-text-field>
                </v-flex>
              </v-layout>
            </v-flex>

            <v-flex class="ml-4" xs12 sm12 md12 lg12>
              <v-layout row>
                <v-flex class="mr-2" xs12 sm12 md3 lg3>
                  <v-text-field
                    dense
                    :label="$t('warantyPeriod')"
                    v-model="item.warantyperiod"
                    outlined
                    type="number"
                    :rules="inputRule"
                  ></v-text-field>
                </v-flex>

                <v-flex class="mr-2" xs12 sm12 md3 lg3>
                  <v-text-field
                    dense
                    :label="$t('expirable')"
                    v-model="item.expirable"
                    outlined
                    type="boolean"
                    :rules="inputRule"
                  ></v-text-field>
                </v-flex>

                <v-flex class="mr-2" xs12 sm12 md3 lg3>
                  <v-text-field
                    dense
                    :label="$t('expiredDate')"
                    v-model="item.expiredate"
                    outlined
                    :rules="inputRule"
                    type="date"
                    name="date"
                  ></v-text-field>
                </v-flex>

                <v-flex xs12 sm12 md2 lg2>
                  <v-autocomplete
                    :items="category"
                    dense
                    hide-details
                    :rules="inputRule"
                    :label="$t('Catagory')"
                    v-model="item.categoryId"
                    item-text="categoryName"
                    item-value="id"
                    outlined
                    @input="selectProduct"
                  ></v-autocomplete>

                  <div slot="prepend-item">
                    <v-btn
                      text
                      block
                      color="amber"
                      class="text-capitalize"
                      @click="createCategory"
                    >
                      {{ 'Add New Category' }}
                    </v-btn>
                  </div>
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>

          <v-layout row justify-center>
            <v-spacer />
            <v-btn
              outlined
              color="red"
              @click="createProductDialog = false"
              style="margin-bottom: 10px;"
            >
              Cancel
            </v-btn>
            <v-spacer />
            <v-btn
              outlined
              color="green"
              @click="save()"
              style="margin-bottom: 10px;"
            >
              {{ $t('save') }}
            </v-btn>
            <v-spacer />
          </v-layout>
        </v-form>
      </v-card>

      <!-- =========== Category Dialog ============== -->
      <v-dialog v-model="dialog" persistent max-width="400px">
        <v-card wrap outlined style="border-radius: 1px;">
          <v-app-bar color="amber">
            <v-card-subtitle>
              <span style="color: white;">Create Category</span>
            </v-card-subtitle>

            <v-spacer />

            <v-btn icon dark @click="closeDialog" color="red">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-app-bar>

          <CategoryPopup :item="this.item" />

          <v-card-actions>
            <v-btn class="mr-2" small color="red" text @click="dialog = false">
              Cancel
            </v-btn>

            <v-spacer></v-spacer>
            <div>
              <v-btn small color="amber" text @click="saveCategory">
                {{ $t('save') }}
              </v-btn>
            </div>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-container>
  </v-dialog>
</template>

<script>
import { api, path } from '@/api'
import { mapActions, mapState } from 'vuex'
import AccountService from '@/shared/services'
import CategoryPopup from '../category/CategoryPopup'

export default {
  props: ['createProductDialog'],

  data() {
    return {
      item: {},
      user: AccountService.getProfile(),
      categoryId: '',
      categoryName: '',
      // category:[],
      inputRule: [(v) => !!v || 'This field is required'],
      dialog: false,
      category: [],
      image:
        'data:image/jpeg;base64,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',
      profileDone: false,
      pathContainer: path.container,
      userProductImageUrl: '',
      selectedFileProduct: '',
      productInfo: '',
    }
  },

  computed: {
    ...mapState('inventory', ['category', 'inventoryNames']),
  },

  mounted() {
    this.userName = this.user.fullName
    // this.item.stock = this.tableItem.length
  },

  async created() {
    let items = (await api.all(path.category)).rows
    this.category = items.map((x) => {
      return {
        id: x.id,
        categoryName: x.categoryName,
      }
    })
  },

  components: {
    CategoryPopup,
  },

  methods: {
    ...mapActions('inventory', [
      'postData',
      'getCategory',
      'postProduct',
      'getProduct',
    ]),

    selectProduct(val) {
      this.categoryId = val.id
      this.categoryName = val.categoryName
    },
    async created() {
      this.getCategory()
      // let items = (await api.all(path.category)).rows;
      this.item.createdBy = this.user.fullName
      // this.category = items.map(x => {
      //   return {
      //     id: x.id,
      //     categoryName: x.categoryName,
      //   };
      // });
    },

    async createCategory() {
      this.dialog = true
    },
    async closeDialog() {
      this.dialog = false
    },
    saveCategory() {
      this.postData([this.item, path.category])
        .then(() => {
          this.dialog = false
          this.getCategory()
          // this.$router.push({ name: "category-list" });
          this.$notify({
            type: 'success',
            title: this.$t('create category'),
            message: `${this.$t('category')} ${this.$t(
              'registered Successfully',
            )}`,
          })
        })
        .catch((err) => {
          this.showErrors(err)
        })
    },
    async save() {
      if (this.profileDone) {
        this.uploadPicture(this.selectedFileProduct)
      }

      if (this.$refs.form.validate()) {
        this.item.stock = parseInt(this.item.stock)
        this.item.safetyStock = parseInt(this.item.safetyStock)
        this.item.minimumOrderQt = parseInt(this.item.minimumOrderQt)
        this.item.weightPerUnit = parseInt(this.item.weightPerUnit)
        this.item.warantyperiod = parseInt(this.item.warantyperiod)
        this.item.expiredate = new Date()
        this.item.expirable = Boolean(this.item.expirable)
        this.categoryId = this.item.categoryId
        this.postProduct([this.item]).then(() => {
          this.createProductDialog = false
          this.getProduct()
        })
      }
    },

    onProductFileSelected(event) {
      this.selectedFileProduct = event.target.files[0]

      this.userProductImageUrl = URL.createObjectURL(this.selectedFileProduct)
      this.image = this.userProductImageUrl
      this.productInfo = this.selectedFileProduct.name
      this.profileDone = true
    },

    async uploadPicture(file) {
      const formData = new FormData()
      let name = new Date().toISOString().substr(0, 15) + this.item.productName

      this.item.imagePath = name
      formData.append('Image', file, name)
      await api.upload('product', formData, this.pathContainer)
    },
  },
}
</script>
<style scoped>
#rounded-card {
  border-radius: 50%;
  width: 100px;
  height: 100px;
  vertical-align: middle;
  margin-left: 28%;
}
</style>
